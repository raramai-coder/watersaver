import React from "react";
import "../Styles/main.css";
import {
	GoogleMapProvider,
	useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";

function Levels() {
	return (
		<main>
			<h1>Dam Levels</h1>
			<div className="level-container">
				<GoogleMapProvider googleMapsAPIKey></GoogleMapProvider>
				<div className="map-area">Map ARea</div>
				<div className="info-area">
					<h2>Berg River</h2>
					<p className="info-text-highlight">Storage Level: 79.57%</p>
					<p>Last Week: 79.57%</p>
					<p>Last Year: 25.44%</p>
					<p>Reading Date: 10/3/2023</p>
					<p>Search</p>
				</div>
			</div>
		</main>
	);
}

export default Levels;
