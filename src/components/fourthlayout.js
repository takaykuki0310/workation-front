import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import FourthQuestion from './fourthQuestion';
import Footer from './footer';

const fourthLayout = ({ }) => (
	<div>
		<Helmet />
		<Header />
    <FourthQuestion />
		<Footer />
	</div>
);

export default fourthLayout;
