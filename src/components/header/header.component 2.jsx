import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selectors";


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.style.scss';

import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from "./header.style";


const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<h1>DLS - Customer Shopping System</h1>
		<OptionsContainer className="options">
			<OptionLink to="/shop">
				ONLINE SHOP
			</OptionLink>
			<OptionLink to="/map">
				PICKUP POINT
			</OptionLink>
			{currentUser ? (
				<OptionDiv onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionDiv>
			) : (
				<OptionLink to="/signin">
					SIGN IN
				</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
