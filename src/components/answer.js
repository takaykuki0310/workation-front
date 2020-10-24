import React from 'react';
import axios from 'axios';

import './style.scss';

class answer extends React.Component {
	constructor(props) {
	  super(props);
	  this.recommendResult = this.recommendResult.bind(this);
	  this.state = {
		spots: [],
	  };
	  // 東京駅
	  axios.get("https://bsxaehmpzd.execute-api.ap-northeast-1.amazonaws.com/production/places", {
		params: {
			lat: 35.6809591,
			lng: 139.7673068,
			radius: 50000,
		}
	  }).then(this.recommendResult);
	}

	recommendResult(response) {
		console.log(response.data)
		if(response.data[0]){
			this.setState({ spots: [response.data[0]] });
		}
	}

	render() {
		const spotPlaces = []
		for(const spot of this.state.spots){
			spotPlaces.push(
				<div className="container">
			  		<p className="title main-question">あなたが行くべきワーケーション先は{spot.name}です</p>
			  		<p><progress className="progress is-info" value="100" max="100">20%</progress></p>
					<img src={spot.photoUrl} />
				</div>
			);
		}

		return (
			<div>
				<div className="hero is-primary">
					<div className="hero-body">
						{spotPlaces}
					</div>
				</div>
			</div>
		);
	}
}

export default answer;
