import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Question from './question';
import Footer from './footer';

import { Location } from '@reach/router';

const Layout = ({ }) => {
	return (
		<div>
				<Helmet />
				<Header />
				<Question />
				<Footer />
	</div>
	)

};

export default Layout;
