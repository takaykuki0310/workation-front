import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import ThirdQuestion from './thirdQuestion';
import Footer from './footer';

const secondLayout = ({ }) => (
	<div>
		<Helmet />
		<Header />
    <ThirdQuestion />
		<Footer />
	</div>
);

export default secondLayout;
