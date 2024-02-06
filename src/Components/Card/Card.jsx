import scss from "./Card.module.scss";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Card = () => {
	const navigate = useNavigate();
	const hadles = () => {
		navigate("/login");
	};
	return (
		<div className={scss.wrapper}>
			<h1>🌠</h1>
			<div className={scss.input_box}>
				<input
					className={scss.input}
					type="email"
					value=""
					placeholder="UserName🥷"
					required
				/>
				<FaUser className={scss.icon} />
				<button className={scss.btn} onClick={hadles}>
					Go Login🔜
				</button>
				<div className={scss.card}>
					<a href="https://github.com/SultanovMusa">
						<FaGithubSquare />
					</a>
					<a href="https://www.instagram.com/sultanov_11_/">
						<FaInstagram />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
