import React, {Component} from 'react'

export default class PowderSearch extends Component {

    state = {
        selectedOption: "name",
        input: ""
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        switch(this.state.selectedOption){
            case 'name':
                return this.props.searchByName(this.state.input);
            case 'brand':
                return this.props.searchByBrand(this.state.input);
            case 'max-price':
                 return this.props.searchByMaxPrice(this.state.input);
            case 'flavor':
                return this.props.searchByFlavor(this.state.input);
            default:
                return null;
        }
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value
          })
    }

    placeholder = () => {
        return `Please Enter a ${this.state.selectedOption.toUpperCase()}`
    }

    render(){
        return(
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Search: </label>
                    <input className="text-input" 
                        onChange={this.handleChange} 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        placeholder={this.placeholder()}/>
                    <div className="radio-buttons">
                        <div className="radio">
                        <label>
                            <input 
                            type="radio" 
                            name="radio" 
                            value="name" 
                            checked={this.state.selectedOption === 'name'}
                            onChange={this.handleOptionChange} />
                            Name
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input 
                            type="radio" 
                            name="radio" 
                            value="brand"
                            checked={this.state.selectedOption === 'brand'}
                            onChange={this.handleOptionChange} />
                            Brand
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input 
                            type="radio" 
                            name="radio" 
                            value="max-price"
                            checked={this.state.selectedOption === 'max-price'}
                            onChange={this.handleOptionChange} />
                            Max Price
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input 
                            type="radio" 
                            name="radio" 
                            value="flavor"
                            checked={this.state.selectedOption === 'flavor'}
                            onChange={this.handleOptionChange} />
                            Flavor
                        </label>
                        </div>
                    </div>
                    <input className="submit" type="submit" />
                </form>
            </div>
        )
    }
}