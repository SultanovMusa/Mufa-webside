import axios from "axios";
import { useState, useEffect } from "react";
import scss from "./Home.module.scss";
import { useNavigate } from "react-router-dom";

const urls =
	"https://api.elchocrud.pro/api/v1/f0276e0bea68e311f4aed0859866df8f/todos";

const Home = () => {
	const [data, setData] = useState({});

	const getUserId = localStorage.getItem("isAuth");

	const getRequest = async () => {
		try {
			const res = await axios.get(urls);
			const responseData = await res.data;

			if (getUserId) {
				const findUser = responseData.find((item) => item._id === +getUserId);
				setData(findUser);
			} else {
				console.log("User is not authenticated");
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getRequest();
	}, []);

	// const deleteData = async (id) => {
	// 	const res = await axios.delete(`${urls}/${id}`);

	// 	setData({});
	// };

	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("isAuth");
		setData({});
		navigate("/login");
	};

	return (
		<div>
			<span>Welcome 🌠 </span>

			<button onClick={handleLogout}>Выйти🔙</button>

			<div className={scss.content}>
				<h3 className={scss.h3}>Email: {data.name}</h3>
				<p>Password: {data.pas}</p>
				{/* <button onClick={() => deleteData(data._id)}>Delete</button> */}
			</div>
		</div>
	);
};

export default Home;
