import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

export default class Checkout extends Component{
    constructor(props){
        super(props);

        this.state={
          inCart : false
        }
        this.displayCart = this.displayCart.bind(this)
    }

    displayCart(){
      this.setState({inCart: true})
    }

    render(){

      let price = "68.99"
      let inCart = false;
        return(
        <div className = "checkout">
          <div className = "price"><span className = "pricetext">Price:</span><span className = "pricecost">${price}</span></div>
          <div className = "inCart">{this.state.inCart === true ? <><img src="https://www.freepnglogos.com/uploads/tick-png/check-mark-tick-vector-graphic-21.png" className = "checkimg"></img><span className = "inyourcart">IN YOUR CART</span></> : ''}</div>
          <div className = "addToCart link" onClick = {this.displayCart}><span className = "addText">ADD TO CART</span><div className = "arrow"></div> </div>
          <div className = "earnRewards">Start Earning AutoZone Rewards credits with this purchase!<div className="orange link linkunderline find">Find Out How</div></div>
          <div className = "hotDeals">Hot Deals & Savings<div className = "arrowdown"></div></div>
          <div className = "shipping">
            <img src="https://static.wixstatic.com/media/2cd43b_5aac319c2774446b8e532de3bb6069d5~mv2.png/v1/fill/w_320,h_320,fp_0.50_0.50/2cd43b_5aac319c2774446b8e532de3bb6069d5~mv2.png" className = "shippingimage"></img>
            <div className = "freeshipping">FREE Shipping</div>
            <div className = "shippingtext">On orders $35 or Greater and FREE Shipping to APO, FPO, DPO addresses.<span className = "orange link linkunderline">See Details</span></div>
          </div>
        </div>
    )
  }
}