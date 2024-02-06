import scss from "./Footer.module.scss";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
	return (
		<div className={scss.car}>
			<p>Copyright 💸 2024. All rights are reserved</p>
			<p>Built with 🖤 by Mufa.06.02.2024🗓️</p>

			<a  href="https://github.com/SultanovMusa">
				<FaGithubSquare />
			</a>
			<a href="https://www.instagram.com/sultanov_11_/">
				<FaInstagram />
			</a>
		</div>
	);
};

export default Footer;
