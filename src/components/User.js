import React, {
	Component,
	PropTypes
}
from 'react';
import faker from 'faker'
import UserData from './UserData'
import './User.css'

class User extends Component {
	constructor(props) {
		super(props);

		const name = this.props.params.userName;
		if (name === "米開朗基羅") {
			this.state = {
				userData: UserData[0]
			}
		} else if (name === "野豬騎士") {
			this.state = {
				userData: UserData[1]
			}
		} else {
			this.state = {
				userData: UserData[2]
			}
		}
	}

	render() {
		console.log(UserData);
		const {
			userData
		} = this.state;

		return (
			<div>
				<div className="container-fluid bg-1 text-center">
					<img src={userData.img} className="img-responsive img-circle center-block" width="300" height="300"/>
				</div>

				<div className="container-fluid bg-2 text-center">
					<h2>我是</h2>
					<h1>{userData.name}</h1>
				</div>

				<div className="container-fluid text-center">
					<h2>日常照片</h2>
					<div className="row">
						<div className="col-sm-4">
							<img src={faker.image.imageUrl()} className="img-rounded img-responsive daily-img center-block"/>
  						</div>
  						<div className="col-sm-4">
							<img src={faker.image.imageUrl()} className="img-rounded img-responsive daily-img center-block"/>
  						</div>
  						<div className="col-sm-4">
							<img src={faker.image.imageUrl()} className="img-rounded img-responsive daily-img center-block"/>
  						</div>
					</div>
				</div>

				<div className="container-fluid bg-4 text-center">
					<h2>聯絡我</h2>
					<span className="glyphicon glyphicon-envelope"/>
				</div>
        	</div>
		);
	}
}

export default User;