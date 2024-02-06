import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import scss from "./Registr.module.scss";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const urls =
	"https://api.elchocrud.pro/api/v1/f0276e0bea68e311f4aed0859866df8f/todos";

const Registr = () => {
	const navigate = useNavigate();
	const [emailValue, setEmail] = useState("");
	const [passwordValue, setPassword] = useState("");

	const handle = async () => {
		try {
			const response = await axios.post(urls, {
				name: emailValue,
				pas: passwordValue,
			});

			const responseData = response.data;

			const matchUser = responseData.find(
				(item) => item.name === emailValue && item.pas === passwordValue
			);

			if (emailValue === "" && passwordValue === "") {
				alert("Registration Болунуз❓");
				return;
			}

			if (!emailValue.includes("@")) {
				alert("Сураныч Email да @ койгонду унтбаныз✅ .");
				return;
			}

			if (passwordValue.length <= 6) {
				alert("Password то 6 цифрадан коп болсун сураныч ✅.");
				return;
			}

			if (matchUser) {
				navigate("/login");
			} else {
				alert("Incorrect email or password. Please try again.");
			}
		} catch (error) {
			console.error("Error during registration:", error);
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
				<h1>Registration🌠</h1>
				<div className={scss.input_box}>
					<input
						className={scss.input}
						type="email"
						value={emailValue}
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
						value={passwordValue}
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

				<button type="button" onClick={handle}>
					<a>Go Login↩️</a>
				</button>

				<div className={scss.register_link}>
					<p>
						Don,t have an account? <Link to="/login">Login📝</Link>
					</p>
				</div>
				<div className={scss.card}>
					<a className={scss.mu} href="https://github.com/SultanovMusa">
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

export default Registr;
