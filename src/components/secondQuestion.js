import React from 'react';

import './style.scss';
import { Link } from 'gatsby';

const secondQuestion = () => (
	<div>
				<div className="hero is-primary">
					<div className="hero-body">
						<div className="container">
								<p className="title main-question">仕事重視か休暇重視か？</p>
								<p><progress className="progress is-info" value="40" max="100">20%</progress></p>

						</div>
					</div>
				</div>
				<div className="buttons next-button">
					<Link to="/page3">
							<button className="button is-info is-large is-fullwidth">仕事重視派</button>
					</Link>
					<Link to="">
							<button className="button is-info is-large is-fullwidth">休暇重視派</button>
					</Link>
				</div>
	</div>
);

export default secondQuestion;
