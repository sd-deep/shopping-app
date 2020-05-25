import React from 'react';
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux'

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps = ({cart : { cartItems}}) => ({
    itemCount : cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)