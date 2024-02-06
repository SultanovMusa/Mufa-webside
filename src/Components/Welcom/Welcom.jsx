import { useNavigate } from "react-router-dom";
import scss from "./Welcom.module.scss";
const Welcom = () => {
	const navigate = useNavigate();
	const handl = () => {
		navigate("/login");
	};
	return (
		<div>
			<h1>Асааламу алейкум🤝</h1>

			<button className={scss.btn} onClick={handl} type="button">
				<strong>WELCOME</strong>
				<div className={scss.container_stars}>
					<div className={scss.stars}></div>
				</div>

				<div className={scss.glow}>
					<div className={scss.circle}></div>
					<div className={scss.circle}></div>
				</div>
			</button>
		</div>
	);
};

export default Welcom;
