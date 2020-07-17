import React, {Component} from 'react';
import { Container,Media } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class DetailItem extends Component{

    render(){
       

        return(
            <Container>
        <Media className="mt-1">
        <Media left middle href="#">
        <img src= {'image/'+ this.props.item.img} width="100px" alt="image"></img>       
         </Media>
        <Media body>
          <Media heading>
        {this.props.item.name}
          </Media>
          {this.props.item.detail}
        </Media>
      </Media>
            </Container>
        )
    }
}
export default withRouter(DetailItem);