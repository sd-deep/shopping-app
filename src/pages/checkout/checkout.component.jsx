import React from "react";

import "./checkout.styles.scss";
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CheckoutPage = ({ cartTotal, cartItems, ...otherProps }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems ? cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)) : null}
    <div className='total'>
      Total: Rs{cartTotal}
    </div>
  </div>
);

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStatetoProps)(CheckoutPage);
