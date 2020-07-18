import React, { Component } from 'react';
import './style.css';
import CartItem from './CartItem';
import { Container } from 'reactstrap';
import { Button } from 'react-bootstrap';
import Payment from './Payment';
class Cart extends Component {

    constructor(props) {
        super(props);
        this.state={
            menu:"carts",

          }
          this.onPaymentClicked = this.onPaymentClicked.bind(this);
        this.state = {
            carts: JSON.parse(localStorage.getItem("cart"))
        }
        //console.log(this.state.cart);
    }
    
    onDeleteClick(index) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
        }
    }
    Total() {
        let sum = 0;
        let { carts } = this.state;
        for (let i = 0; i < carts.length; i++) {
            sum += carts[i].price * carts[i].quantity;

        }
        return sum;
    }
    onPaymentClicked(){
        this.setState({
            menu:"payment"
        })
    }
    
    render() {
        return (
            <Container>
                 {this.state.menu==="payment" ?<Payment/>:null}
                <h3> Your Cart</h3>
                <div class="cart">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>image</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>Total</th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        {this.state.carts.map((item, index) =>
                            <CartItem key={index}
                                item={item}
                                onDeleteClick={this.onDeleteClick(index)}
                            />)}
                    </table>
                    <tr class="sum" >Sum:{this.Total()}</tr>
                </div>
                <div class="button-checkCart">
                <Button variant="secondary" >CONTINUE SHOPPING</Button>
                <Button variant="secondary" onClick={this.onPaymentClicked}>CHECKOUT NOW</Button>
                </div>              
            </Container>
        );

    }

}
export default Cart;