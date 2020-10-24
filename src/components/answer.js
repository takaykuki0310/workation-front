import React from 'react';

import './style.scss';

const answer = () => (
	<div>
      <div className="hero is-primary">
					<div className="hero-body">
						<div className="container">
								<p className="title main-question">あなたが行くべきワーケーション先は〇〇です</p>
								<p><progress className="progress is-info" value="100" max="100">20%</progress></p>

						</div>
					</div>
			</div>
	</div>
);

export default answer;
