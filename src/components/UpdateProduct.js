import React, { Component } from 'react';
import './style.css';
import { Container } from 'reactstrap';
import { Button } from 'react-bootstrap';
class UpdateProduct extends Component {
    constructor() {
        super()
this.state={
   index:'',
   products:[]
};
    }
   
     onUpdateProduct(i){
        let product = this.state.products[i];
        this.refs.name.value = product.name;
        this.refs.img.files.item(0).name = product.img;
        this.refs.price.value= product.price;
        this.refs.oldPrice.value= product.oldPrice;
        this.refs.quantities.value= product.quantities;
        this.refs.categories.value= product.categories;
        this.refs.detail.value= product.detail;
        this.setState({
          act: 1,
          index: i
        });
    
        this.refs.name.focus();
      }  
    

    render() {

        return (
            <Container>
            <form onSubmit={this.onUpdateProduct} className="AddProduct">
                <h2>Add Product</h2>
                <input type="text" name="name"  value={this.state.name}/>
                <input type="text" name="price"  value={this.state.price}/>
                <input type="text" name="oldPrice" value={this.state.oldPrice}/>
                <input type="text" name="quantities"  value={this.state.quantities}/>
                <label name="fname">Categories:</label>
                <select id="categories" value={this.state.categories}>
                    <option value="1">Formal Dresses</option>
                    <option value="2">Graduation Dresses</option>
                    <option value="3">Wedding Guest Dresses</option>
                </select>
                <input type="file" name="img"  value={this.state.img} placeholder="upload image"/>

                <textarea id="detail" name="detail"value={this.state.detail} rows="4" cols="50"></textarea>


                <button>Add</button>
            </form>
          
            </Container>
        );

    }

}
export default UpdateProduct;