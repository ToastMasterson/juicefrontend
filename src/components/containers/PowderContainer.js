import React, {Component} from 'react'
import PowderList from '../PowderList'
import PowderSearch from '../PowderSearch'

export default class PowderContainer extends Component {

    state = {
        powders: [],
        display: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/powders')
        .then(response => response.json())
        .then(result => this.setState({
            powders: result,
            display: result
        }))
    }

    searchByName = (name) => {
        let results = this.state.powders.filter(powder => {
            return powder.name.toLowerCase().includes(name.toLowerCase())
        })
        this.setState({
            display: results
            })
      }
    searchByBrand = (brand) => {
        let results = this.state.powders.filter(powder => {
            return powder.brand.toLowerCase().includes(brand.toLowerCase())
        })
        this.setState({
            display: results
            })
      }
    searchByMaxPrice = (price) => {
        let results = this.state.powders.filter(powder => {
            return powder.price <= parseInt(price)
        })
        this.setState({
            display: results
            })
      }
    searchByFlavor = (flavor) => {
        let results = this.state.powders.filter(powder => {
            return powder.flavor.toLowerCase().includes(flavor.toLowerCase())
        })
        this.setState({
            display: results
            })
      }

    render(){
        return(
            <div className="powder-container">
                <PowderSearch 
                    searchByMaxPrice={this.searchByMaxPrice} 
                    searchByName={this.searchByName} 
                    searchByFlavor={this.searchByFlavor}
                    searchByBrand={this.searchByBrand}/>
                <PowderList powders={this.state.display} />
            </div>
        )
    }
}