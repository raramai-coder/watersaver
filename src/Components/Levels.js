import "../Styles/main.css";
import { Box, Input } from "@chakra-ui/react";
import {
	useJsApiLoader,
	GoogleMap,
	Marker,
	Autocomplete,
} from "@react-google-maps/api";
import Papa from "papaparse";
import { useState } from "react";

const center = {
	lat: -25.6426590313842,
	lng: 28.354841696486154,
};

const libraries = ["places"];

function Levels() {
	const [dams, setDams] = useState([]);

	const getCsvData = async () => {
		Papa.parse(await fetchCsv(), {
			header: true,
			skipEmptyLines: true,
			complete: function (result) {
				//console.log(result.data);
				const copyData = [];
				const dam = {
					Dam: result.data.Dam,
					Level: result.data.Level,
					lat: result.data.lat,
					lng: result.data.lng,
				};
				copyData.push(dam);
				//setDams(result.data);
				setDams(copyData);
				console.log(dams);
				//dams.append(result);
				//dams = result;
				//console.log(dams);
			},
		});
	};

	const fetchCsv = async () => {
		const response = await fetch("../Data/DemoDamLevels.csv");
		let reader = response.body.getReader();
		const result = await reader.read();
		let decoder = new TextDecoder("utf-8");
		const csv = await decoder.decode(result.value);
		return csv;
	};

	getCsvData();

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: "AIzaSyDCD9_1XslaAhMLCX6EWnbD2TNGCaBINEE",
		libraries: libraries,
	});

	if (!isLoaded) {
		return <div className="map-area">Map ARea</div>;
	}

	return (
		<main>
			<h1>Dam Levels</h1>
			<div className="level-container">
				<Box className="map-area">
					<GoogleMap
						center={center}
						zoom={15}
						mapContainerStyle={{ width: "100%", height: "100%" }}
					>
						{/* <Marker position={center} /> */}
						{/* {dams.map((lat, lng) => (
							
							<Marker
								position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
							/>
						))} */}
						{dams.map((lat) => {
							console.log(dam);
							return (
								<Marker
									position={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
									key={item}
								/>
							);
						})}
					</GoogleMap>
				</Box>

				<div className="info-area">
					<h2>Berg River</h2>
					<p className="info-text-highlight">Storage Level: 79.57%</p>
					<p>Last Week: 79.57%</p>
					<p>Last Year: 25.44%</p>
					<p>Reading Date: 10/3/2023</p>

					<Autocomplete>
						<Input type="text" placeholder="Search for Dam"></Input>
					</Autocomplete>
				</div>
			</div>
		</main>
	);
}

export default Levels;
