import React, {Component} from 'react';
import DetailItem from './DetailItem';
import {withRouter} from 'react-router-dom';

class Detail extends Component{

  constructor(props){
    super(props)
    this.state = {
        products: JSON.parse(localStorage.getItem("products"))
    } 
  }
  showchitiet(id){
    const {products} = this.state;
    var product;
    for(var i = 0; i < products.length; i++){
      if(products[i].id == id){
        product = <DetailItem item={products[i]}/> 
                  break;
      }
    }
    return product;
  }
    render(){
      let id = this.props.match.params.id;
        return(
          <div>
            {this.showchitiet(id)}
          </div>
        )
    }
}
export default withRouter(Detail);