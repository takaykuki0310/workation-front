import React from 'react';

import './style.scss';
import { Link } from 'gatsby';

const thirdQuestion = () => (
	<div>
				<div className="hero is-primary">
					<div className="hero-body">
						<div className="container">
								<p className="title main-question">個室で集中して作業したいか？</p>
								<p><progress className="progress is-info" value="60" max="100">20%</progress></p>

						</div>
					</div>
				</div>
				<div className="buttons next-button">
					<Link to="/page4">
							<button className="button is-info is-large is-fullwidth">個室で作業したい</button>
					</Link>
					<Link to="page3">
							<button className="button is-info is-large is-fullwidth">気にしない</button>
					</Link>
				</div>
	</div>
);

export default thirdQuestion;
