import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Answer from './Answer';
import Footer from './footer';

const fourthLayout = ({ }) => (
	<div>
		<Helmet />
		<Header />
    <Answer />
		<Footer />
	</div>
);

export default fourthLayout;
