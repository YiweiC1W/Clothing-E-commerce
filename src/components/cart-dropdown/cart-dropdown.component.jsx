import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems  } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
	<div className="cart-dropdown">
		{cartItems.length ? (
			<div className="cart-items">{cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}</div>
		) : (
			<span className="empty-message">Your cart is empty</span>
		)}
		<CustomButton
			onClick={() => {
				history.push('/checkout');
				toggleCartHidden();
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
