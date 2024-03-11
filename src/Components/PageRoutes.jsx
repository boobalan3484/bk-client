import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Yoga from "./Yoga";

const PageRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/yoga" element={<Yoga />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PageRoutes;
