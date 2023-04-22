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
	const [selectedDam, setSelectedDam] = useState(null);

	const [dams, setDams] = useState([]);

	const getCsvData = async () => {
		const csv = await fetchCsv();
		const results = Papa.parse(csv, {
		  header: true,
		  skipEmptyLines: true,
		});
		const copyData = results.data.map((result) => ({
		  Dam: result.Dam,
		  Level: result.Level,
		  lat: result.lat,
		  lng: result.lng,
		  Lastweek: result.Lastweek,
		  LastYear: result.LastYear


		}));
		setDams(copyData);
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
						{dams.map((dam) => (
  <Marker
  key={dam.Dam}
    position={{ lat: parseFloat(dam.lat), lng: parseFloat(dam.lng) }}
	onClick={() => setSelectedDam(dam)}

  />
))}

					</GoogleMap>
				</Box>

				
				<div className="info-area">
        {selectedDam && (
          <>
            <h2>{selectedDam.Dam}</h2>
            <p className="info-text-highlight">Storage Level: {selectedDam.Level}%</p>
            <p>Last Week: {selectedDam.Lastweek}%</p>
            <p>Last Year: {selectedDam.LastYear}%</p>
            <p>Reading Date: 10/3/2023</p>
          </>
        )}
        <Autocomplete>
          <Input type="text" placeholder="Search for Dam" />
        </Autocomplete>
		</div>
			</div>
		</main>
	);
}

export default Levels;
