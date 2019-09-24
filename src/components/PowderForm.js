import React, {Component} from 'react'

export default class PowderForm extends Component {

    state = {
        name: "",
        brand: "",
        productImage: "",
        price: 0.0,
        flavor: "",
        nutritionImage: ""
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={this.state.name} />
                    <label htmlFor="name">Brand:</label>
                    <input type="text" name="brand" value={this.state.brand} />
                    <label htmlFor="name">Product Image:</label>
                    <input type="text" name="productImage" value={this.state.productImage} />
                    <label htmlFor="name">Nutrition Image:</label>
                    <input type="text" name="nutritionImage" value={this.state.nutritionImage} />
                    <label htmlFor="name">Flavor:</label>
                    <input type="text" name="flavor" value={this.state.flavor} />
                    <label htmlFor="name">Price:</label>
                    <input type="number" name="price" value={this.state.price} />
                    <input type="submit" value="Add new Powder" />
                </form>
            </div>
        )
    }
}