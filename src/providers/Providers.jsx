import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Providers = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const userCredentials = localStorage.getItem("isAuth");
	
	const isLocalBoolean = !!userCredentials;
	console.log(isLocalBoolean);

	useEffect(() => {
		if (isLocalBoolean && (pathname === "/login" || pathname === "/registration")) {
			navigate("/home");
		} else if (!isLocalBoolean && pathname === "/home") {
			navigate("/login");
		}
	}, [pathname, isLocalBoolean, navigate]);

	return children;
};

export default Providers;
