import scss from "./NotFound.module.scss";
import { Link } from 'react-router-dom';

const NotFound = () => {

	return (
		<div className={scss.wrapper}>
				<div className={scss.notFoundContainer}>
            <h1 className={scss.title}>404 - Страница не найдена</h1>
            <p className={scss.description}>Извините, запрошенная страница не найдена.</p>
            <Link to="/home">Вернуться на главную</Link>
        </div>
			</div>
	);
};

export default NotFound;
