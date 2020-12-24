import React from "react";

const OverviewList = (props) => {
	console.log(props.data);

	// const [userrepo, setUserrepo] = React.useState([]);

	// React.useEffect(() => {
	const getData = async () => {
		const response = await fetch(props.data);
		const result = await response.json();
		console.log(result);
		// setUserrepo(result);
	};
	getData();
	// console.log(userrepo);
	// }, []);

	return (
		<ul className="overview-collection">
			<li>hi</li>
			{/* <li>{userrepo[0].id}</li> */}
		</ul>
	);
};

export default OverviewList;
