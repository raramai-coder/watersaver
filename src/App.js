import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import FAQ from "./Components/FAQ";
import Report from "./Components/Report";
import Levels from "./Components/Levels";
import LanguageSelector from "./Components/LanguageSelector";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<React.Fragment>
				<Navbar />
			</React.Fragment>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="faq" element={<FAQ />}></Route>
				<Route path="report" element={<Report />}></Route>
				<Route path="levels" element={<Levels />}></Route>
				{/* <Route path="language" element={<LanguageSelector />}></Route> */}
			</Routes>
		</>
	);
}

export default App;
