import React, { Component } from 'react';
import './App.css';
import {NavDropdown,Container,Navbar, Nav,Button,Form } from 'react-bootstrap';
import './components/style.css';
import { FcLibrary,FcAssistant,FcApproval } from "react-icons/fc";
import Cart from './components/Carts';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailItem from './components/DetailItem';
import Detail from './components/Detail';
// import UpdateProduct from './components/UpdateProduct';
class App extends Component{
  constructor(){
    super();
    this.state={
      
      menu:"products"
    }
  }

  render(){
  return (
    <div className="App">
     
      
         <Container className="Header" fluid={true}>
  
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><h1>Any Shop</h1></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home"><FcLibrary />Home</Nav.Link>
      <Nav.Link href="#pricing"><FcAssistant/>About us</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown"><FcApproval/>
        <NavDropdown.Item href="#">Dress1</NavDropdown.Item>
        <NavDropdown.Item href="#">Dress2</NavDropdown.Item>
        <NavDropdown.Item href="#">Dress3</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/create">AddProduct</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
    </Nav>
    <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
              </Container>
         <Router>
        <Switch>
          <Route path="/home" exact> <Products/></Route>
          <Route path={'/home/:id'}>  <Detail/></Route>
          <Route path="/create"> <AddProduct/></Route>
          <Route path="/cart"> <Cart/></Route>


        </Switch>
      </Router>
    </div>
  );
}
}

export default App;
