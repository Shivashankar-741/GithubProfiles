import React from "react";
import "./AppLayout.css";
import OverView from "../OverView/OverView";

const AppLayout = () => {
	const [data, setData] = React.useState([]);

	const enterPressed = (e) => {
		let keycode = e.keyCode || e.which;
		if (keycode === 13 && e.target.value !== "") {
			const userName = e.target.value;
			fetch(`https://api.github.com/users/${userName}`)
				.then((response) => response.json())
				.then((result) => {
					console.log(result);
					setData(result);
				});
			console.log(userName);
			e.target.value = "";
		}
	};

	return (
		/**APPLAYOUT */
		<div className="AppLayout">
			{/* INPUTFIELD */}
			<div className="inputFieldout">
				<div className="inputField">
					<input
						type="text"
						placeholder="Search a github user..."
						className="inputFieldIn"
						onKeyPress={enterPressed}
					/>
				</div>
			</div>

			{/* OVERVIEW */}
			<OverView userData={data} />
		</div>
	);
};

export default AppLayout;
