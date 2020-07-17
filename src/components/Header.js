import React, { Component } from 'react';
import {NavDropdown,Container,Navbar, Nav,Button,Form } from 'react-bootstrap';
import './style.css';
import { FcLibrary,FcAssistant,FcApproval } from "react-icons/fc";
import AddProduct from './AddProduct';
// import Cart from './components/Cart';
import Products from './Products';
class Header extends Component {
constructor(){
  super();
  this.state={
    menu:"products"
  }
  this.onAddProductClicked = this.onAddProductClicked.bind(this);
  // this.onCartClicked = this.onCartClicked.bind(this);
  this.onCreateClicked = this.onCreateClicked.bind(this);
}
// onCartClicked(){
//   this.setState({
//     menu:"cart"
//   })
// }
onAddProductClicked(){

  this.setState({
    menu:"product"
  })
}
onCreateClicked(){

  this.setState({
    menu:"add-product"
  })
}
    render() {
      
        return (
            <Container className="Header" fluid={true}>
  
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><h1>Wedding Shop</h1></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><FcLibrary />Home</Nav.Link>
      <Nav.Link href="#features"><FcAssistant/>Contact</Nav.Link>
      <Nav.Link href="#pricing"><FcApproval/>About us</Nav.Link>a
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
              </Container>
              //  <button onClick={this.onCreateClicked}>Create</button>
     
              //  {this.state.menu==="cart" ? <Cart/>:null}
             
        );
        {this.state.menu==="product" ? <Products/>:null}
        {this.state.menu==="add-product" ? <AddProduct/>:null}
    }
    
}

export default Header;