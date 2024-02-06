/* eslint-disable no-unused-vars */
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import scss from "./Login.module.scss";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const urls =
	"https://api.elchocrud.pro/api/v1/f0276e0bea68e311f4aed0859866df8f/todos";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handles = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.get(urls);

			const matchUser = res.data.find(
				(item) => item.name === email && item.pas === password
			);

			if (matchUser) {
				localStorage.setItem("isAuth", matchUser._id);
				navigate("/home");
				console.log(matchUser);
			} else {
				alert("Туура Жазыныз.❓");
			}

			if (email === "" && password === "") {
				navigate("/registr");
				return;
			}

			if (!email.includes("@")) {
				alert("Сураныч Email да @ койгонду унтбаныз✅ .");
				return;
			}

			if (password.length <= 6) {
				alert("Password то 6 цифрадан коп болсун сураныч ✅.");
				return;
			}
		} catch (error) {
			console.error("Error during login:", error);
		}
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className={scss.wrapper}>
			<form>
				<h1>Login🌠</h1>
				<div className={scss.input_box}>
					<input
						className={scss.input}
						type="email"
						value={email}
						onChange={handleEmailChange}
						placeholder="UserName🥷"
						required
					/>
					<FaUser className={scss.icon} />
				</div>
				<div className={scss.input_box}>
					<input
						className={scss.input}
						type="password"
						value={password}
						onChange={handlePasswordChange}
						placeholder="Password🔐"
						required
					/>
					<FaLock className={scss.icon} />
				</div>

				<div className={scss.remember_forgot}>
					<label>
						<input type="checkbox" />
						Remember me
					</label>
					<a href="#">Forgot Password</a>
				</div>

				<button className={scss.button} type="submit" onClick={handles}>
					<a>Go home🔜</a>
				</button>

				<div className={scss.register_link}>
					<p>
						Don,t have an account? <Link to="/registr">Register📝</Link>
					</p>
				</div>
				<div className={scss.card}>
					<a href="https://github.com/SultanovMusa">
						<FaGithubSquare />
					</a>
					<a href="https://www.instagram.com/sultanov_11_/">
						<FaInstagram />
					</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
