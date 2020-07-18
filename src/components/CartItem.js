import React, { Component } from 'react';
import './style.css';
import { Input } from 'reactstrap';
import Cart from './Carts';
class CartItem extends Component {
    constructor() {
        super();

    }
    onPaymentClicked() {
        this.setState({
            menu: "payment"
        })
    }

    render() {
        return (
            <tbody>
                <tr>
                    <td>{this.props.item.name}</td>
                    <td><img src={'image/' + this.props.item.img} width="100px" alt="image"></img></td>
                    <td>{this.props.item.price}</td>
                    <td>
                        <button >+</button>
                        <input type="text" onChange={this.handleChange} value={this.props.item.quantity} />
                        <button>-</button>
                    </td>
                    <td>{this.props.item.price * this.props.item.quantity}</td>
                    <td><button class="btn btn-danger" onClick={this.props.onDeleteClick}>X</button></td>
                </tr>
            </tbody>
        );
    }
}
export default CartItem;