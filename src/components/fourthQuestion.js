import React from 'react';

import './style.scss';
import { Link } from 'gatsby';

const fourthQuestion = () => (
	<div>
				<div className="hero is-primary">
					<div className="hero-body">
						<div className="container">
								<p className="title main-question">ワーケーションで出会いを求めるか？</p>
								<p><progress className="progress is-info" value="20" max="100">20%</progress></p>

						</div>
					</div>
				</div>
				<div className="buttons next-button">
					<Link to="/page5">
							<button className="button is-info is-large is-fullwidth">出会いを求める</button>
					</Link>
					<Link to="page3">
							<button className="button is-info is-large is-fullwidth">気にしない</button>
					</Link>
				</div>
	</div>
);

export default fourthQuestion;
