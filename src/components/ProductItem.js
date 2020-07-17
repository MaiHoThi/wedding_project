import  React, {Component} from 'react';
import './style.css';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,Button,Col} from 'reactstrap';
import {FcInfo,FcPaid} from  "react-icons/fc";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class ProductItem extends Component{

    render()
    { 
        let {onClick} = this.props;
        return(
            <Col sm="3">

            <Card className="card">

            <CardImg top width="100px" src = {'image/'+ this.props.item.img} alt="image" className="img" />
            <CardBody>
              <CardTitle>{this.props.item.name}</CardTitle>
              <CardSubtitle><span><h5 class="oldprice">${this.props.item.oldPrice}</h5><h5 class="price">${this.props.item.price} </h5></span></CardSubtitle>
              <Button color="" onClick={onClick}><FcPaid/></Button>
              <Link to={'/home/'+this.props.item.id} ><FcInfo/></Link>
            </CardBody>
            </Card>
            </Col>
           
        );
    }
}
export default ProductItem;