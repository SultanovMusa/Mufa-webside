import scss from "./Layout.module.scss"
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Welcom from "../pages/Welcom/Welcom";
import Login from "../pages/Login/Login";
import Registr from "../pages/Registration/Registr";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Providers from "../../providers/Providers";

const Layout = () => {
	return (
		<div className={scss.layout}>
      <Providers children={undefined}/>
			<Header />
			<main>
        <Routes>
          <Route path="/" element={<Welcom/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registr/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
			<Footer />
		</div>
	);
};

export default Layout;
