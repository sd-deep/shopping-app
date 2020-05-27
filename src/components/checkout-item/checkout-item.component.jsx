import React from "react";
import { connect } from 'react-redux'
import { removeItem } from '../../redux/cart/cart.actions'

import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem
  return (
  <div className="checkout-item">
    <div className='image-container'><img src={imageUrl} alt="item" /></div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={()=> clearItem(cartItem)}>&#10005;</div>
  </div>
);

}

const mapDispatchToProps = dispatch => ({
  clearItem : item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);