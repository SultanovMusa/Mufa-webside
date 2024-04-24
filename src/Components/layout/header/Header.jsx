import { Link } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
	return (
		<div className={scss.content}>
			<nav className={scss.nav}>
				<ul>
					<Link className={scss.lis} to={"/login"}>Login</Link>
					<Link className={scss.lis} to={"/home"}>Home</Link>
					<Link  className={scss.lis}to={"/registration"}>Registration</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
