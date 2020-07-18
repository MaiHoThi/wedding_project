import React, { Component } from 'react';
import './style.css';

import { Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class AddProduct extends Component {
    constructor(props){
        super(props);
        let product = JSON.parse(localStorage.getItem("products"));
        if(!product){
        product = [];
        }
        
        this.state = {
            product: product,
            formValue:[],
            isEdit:false
        }
        this.onAddProduct=this.onAddProduct.bind(this);
        this.onDeleteClick=this.onDeleteClick.bind(this);
       
    }
 

 onAddProduct(event) {
    event.preventDefault();
        let id = 0;
        let name = event.target["name"].value;
        let oldPrice = event.target["oldPrice"].value;
        let price = event.target["price"].value;
        let quantities = event.target["quantities"].value;
        let categories = event.target["categories"].value;
        let img = event.target["img"].files.item(0).name;
        let detail = event.target["detail"].value;

        let products = JSON.parse(localStorage.getItem("products"));
        if (!products) {
            products = [];
            id=0;
        }else{
            id=products[products.length-1].id+1;
        }

        let product = {
            id: id,
            name: name,
            oldPrice: oldPrice,
            price: price,
            quantities: quantities,
            categories: categories,
            img: img,
            detail: detail
        }
       
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        console.log(products);
    }

   
    onUpdateClick(event){
        event.preventDefault();
        let id = event.target["id"].value;
        let name = event.target["name"].value;
        let price = event.target["price"].value;
        let oldPrice = event.target["oldPrice"].value;
        let categories = event.target["categories"].value;
        let quantities = event.target["quantities"].value;
        let detail = event.target["detail"].value;
        let img = event.target["img"].files.item(0).name;
        var product = JSON.parse(localStorage.getItem("products"));
        var oldItem = product.find((el)=>(el.id === id));
        oldItem.name = name;
        oldItem.price = price;
        oldItem.oldPrice = oldPrice;
        oldItem.img = img;
        oldItem.quantities = quantities;
        oldItem.detail = detail;
        oldItem.categories = categories;
        localStorage.setItem("products",JSON.stringify(product));
        this.setState({product: product});
        }
        
        onEditClick(item){
        return (event)=>{
            this.setState({
            isEdit : true,
            formValue : item
        })
        }
       
        }

        changeValue(event){
        this.setState({
        formValue:event.target.value
        })
        }
    
   

    onDeleteClick(index){
       
        return(event)=>{
            let products=JSON.parse(localStorage.getItem('products'));
            products.splice(index,1);
            localStorage.setItem("products",JSON.stringify(products));
            
        }
        
    }
     
    render() {
        const {formValue}=this.state;
        return (
            <Container>
            <form onSubmit={(this.state.isEdit)? this.onUpdateClick : this.onAddProduct} className="AddProduct">
                <h2>Add Product</h2>
                 <input type="text" name="name" id="name" placeholder="Enter name" value={formValue.name} />
                <input type="text" name="price" id="price"  placeholder="Enter price" value={formValue.price}/>
                <input type="text" name="oldPrice" id="oldPrice"   placeholder="Enter oldPrice" value={formValue.oldPrice}/>
                <input type="text" name="quantities"  id="quantities" placeholder="Enter quantity" value={formValue.quantities}/>
                <label name="fname">Categories:</label>
                <select id="categories" value={formValue.categories}>
                    <option value="1">Formal Dresses</option>
                    <option value="2">Graduation Dresses</option>
                    <option value="3">Wedding Guest Dresses</option>
                </select>
                <input type="file" name="img"   placeholder="upload image" value={formValue.img}/>

                <textarea id="detail" name="detail" rows="4" cols="50" value={formValue.detail}></textarea>

                <p>
                <button type="submit" id="add" className="btn btn-primary" >ADD</button>
                   {(this.state.isEdit)?'Update':'Submit'}

               </p> 
            </form>
            <h3> List Product</h3>
                <div class="cart">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th>id</th>
                                <th>name</th>
                                <th>image</th>
                                <th>old Price</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>categories</th>
                                <th> detail </th>
                                <th> Update </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                             {this.state.product.map((item, index)=>(
                             <tbody>
                     <tr>
                     <td>{item.id}</td>

                         <td>{item.name}</td>
                         <td><img src= {'image/'+ item.img} width="100px" alt="image"></img></td>
                         <td>{item.oldPrice}</td>
                         <td>{item.price}</td>
                         <td>{item.quantities}</td>
                         <td>{item.categories}</td>
                         <td>{item.detail}</td>
                         <td><button type="button" onClick={this.onEditClick(item)}>Update</button></td>
                         <td><button onClick={this.onDeleteClick(index)}>Delete</button></td>



                     </tr>
                            
                             </tbody>
                             ))}
                    </table>

                </div>
                <div class="button-checkCart">
                    <Button variant="secondary" ><Link to="/home">CONTINUE SHOPPING</Link></Button>

                </div>
            </Container>
        )
    }
}
export default AddProduct;