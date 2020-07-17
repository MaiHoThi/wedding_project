import React, { Component } from 'react';
import ProductItem from './ProductItem';
import {Row} from 'reactstrap';
import { Container,Col } from 'react-bootstrap';
import {FcAlphabeticalSortingAz,FcAlphabeticalSortingZa} from  "react-icons/fc";
class Products extends Component {

    constructor(props){
        super(props)
        this.state = {
            products: JSON.parse(localStorage.getItem("products")),
            currentPage: 1,
            newsPerPage: 3
           
        }
        //this.products = JSON.parse(localStorage.getItem("products"));
        if (!this.products) {
            this.products = [];
        }
        this.sortByPriceAsc =  this.sortByPriceAsc.bind(this);
        this.sortByPriceDsc =  this.sortByPriceDsc.bind(this);

    }
    showProduct(){
        const currentPage = this.state.currentPage;  //trang hiện tại
        const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
        const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
        const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
        const currentTodos = this.state.products.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang hiện tại
       
          let listPro = currentTodos.map((item,index) =>
                                            <ProductItem
                                            key={index}
                                            item={item}
                                            stt={index + 1 + (currentPage - 1)*newsPerPage} 
                                            onClick={this.onItemClick(item)}
          />);
           return listPro;                         
    }

    onItemClick(item) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem("cart"));
            if (!cart) {
                cart = [];
            }
            // kiem tra item exist?
            let oldItem = cart.find((element) => element.id === item.id);//element.id==item.id

            if (oldItem) {
                oldItem.quantity += 1;//Tăng số lượng quantity đã có trong cart 
            } else {
                item.quantity = 1;//Khởi tạo một biến quantity cho item
                cart.push(item);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
        }
    }

    sortByPriceAsc(){
            let sortedProductsAsc;
            sortedProductsAsc= this.state.products.sort((a,b)=>{
               return parseInt(a.price)  - parseInt(b.price);
            })
  
            this.setState({
                products:sortedProductsAsc
            })
        }
   
   sortByPriceDsc(){

    let sortedProductsDsc;
    sortedProductsDsc= this.state.products.sort((a,b)=>{
       return parseInt(b.price)  - parseInt(a.price);
    })

    this.setState({
        products:sortedProductsDsc
    })
}
chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  
  select = (event) => {
    this.setState({
      newsPerPage: event.target.value
    })
  }

    render() {
       
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.state.products.length / this.state.newsPerPage); i++) {
      pageNumbers.push(i);
    }   
    return (
            <Container>
        {/* <button onClick={this.sortDescending}>desc</button> */}
        <button onClick={this.sortByPriceAsc}><FcAlphabeticalSortingAz/></button>
        <button onClick={this.sortByPriceDsc}><FcAlphabeticalSortingZa/></button>

            <Row className="col-product">
            {this.showProduct()}
            </Row>
            <div className="pagination-custom">
          <ul id="page-numbers">
            {
              pageNumbers.map(number => {
                if (this.state.currentPage === number) {
                  return (
                    <li key={number} id={number} className="active">
                      {number}
                    </li>
                  )
                }
                else {
                  return (
                    <li key={number} id={number} onClick={this.chosePage} >
                      {number}
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
            </Container>
        );

    }

}
export default Products;