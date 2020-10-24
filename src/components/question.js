import React from 'react';
import './style.scss';
import { Link } from 'gatsby';

const Question = () => (
	<div>
				<div className="hero is-primary">
					<div className="hero-body">
						<div className="container">
								<p className="title main-question">個人か家族？</p>
								<p><progress className="progress is-info" value="20" max="100">20%</progress></p>

						</div>
					</div>
				</div>
				<div className="buttons next-button">
					<Link to="/page2">
							<button className="button is-info is-large is-fullwidth">個人が好き</button>
					</Link>
					<Link to="page3">
							<button className="button is-info is-large is-fullwidth">家族が好き</button>
					</Link>
				</div>
	</div>
);

export default Question;
