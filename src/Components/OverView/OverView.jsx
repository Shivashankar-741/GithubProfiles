import React from "react";
import "./OverView.css";

const OverView = (props) => {
	const { name, avatar_url } = props.userData;
	return (
		<div className="overView">
			{name}
			<div>
				<img src={avatar_url} alt="userImage" />
			</div>
		</div>
	);
};

export default OverView;
