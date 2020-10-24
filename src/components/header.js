import React from 'react';

import './style.scss';

import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<div className="hero gradientBg">
		<Navbar />
	</div>
);

export default Header;
