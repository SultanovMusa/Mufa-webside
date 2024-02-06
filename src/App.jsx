import { BrowserRouter, Routes, Route } from "react-router-dom";
import scss from "../src/App.module.scss"

import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registr from "./Components/Registration/Registr";
import Welcom from "./Components/Welcom/Welcom";
import Card from "./Components/Card/Card";
import Header from "./Components/layout/header/Header";
import Footer from "./Components/layout/footer/Footer";
import Providers from "./providers/Providers.jsx";

function App() {
	return (
		<div className={scss.App}>
			<BrowserRouter>
			<Providers />
      
			<Header/>
				<Routes>
					<Route path="/" element={<Welcom />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registr" element={<Registr />} />
					<Route path="/home" element={<Home />} />
					<Route path="*" element={<Card/>} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;
