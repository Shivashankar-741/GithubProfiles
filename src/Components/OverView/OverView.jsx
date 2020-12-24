import React from "react";
import "./OverView.css";
import { GrFormLocation } from "react-icons/gr";
import OverviewList from "./OverviewList";

const OverView = (props) => {
	const {
		name,
		login,
		avatar_url,
		bio,
		twitter_username,
		location,
		repos_url,
	} = props.userData;
	return (
		<div className="overView">
			<div className="profile">
				<div className="user--image">
					<img src={avatar_url} alt="userImage" className="user--image__in" />
				</div>
				<div className="user--name">
					<h2 className="user--name__in">{name}</h2>
					<h5 className="user--login">{login}</h5>
				</div>
				<div className="user--contact">
					<p className="user--bio">{bio}</p>
					<p className="user--twitter">
						https://twitter.com/{twitter_username}
					</p>
				</div>
				<div className="user--location">
					<p className="country">
						<GrFormLocation />
						{location}
					</p>
					<a href={bio} className="link">
						{bio}
					</a>
				</div>
			</div>

			<div className="overview-section">
				<nav className="overview-nav">
					<a href="# ">Overview</a>
					<a href="# ">Repos</a>
					<a href="# ">Followers</a>
				</nav>

				<OverviewList data={repos_url} />
			</div>
		</div>
	);
};

export default OverView;
