import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import SecondQuestion from './secondQuestion';
import Footer from './footer';

const secondLayout = ({ }) => (
	<div>
		<Helmet />
		<Header />
    <SecondQuestion />
		<Footer />
	</div>
);

export default secondLayout;
