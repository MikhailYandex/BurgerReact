import React from 'react';
import Container from '../Container/Container';
import _ from './Navigation.module.css';
import classNames from 'classnames';

const Navigation = () => {
	return (
		<nav className={_.navigation}>
			<Container className={_.container}>
				<ul className={_.list}>
					<li className={_.item}>
						<button className={classNames(_.button, _.button_burger, _.button_active)}>Бургеры</button>
					</li>
					<li className={_.item}>
						<button className={classNames(_.button, _.button_snack)}>Закуски</button>
					</li>
					<li className={_.item}>
						<button className={classNames(_.button, _.button_hotdog)}>Хот-доги</button>
					</li>
					<li className={_.item}>
						<button className={classNames(_.button, _.button_combo)}>Комбо</button>
					</li>
					<li className={_.item}>
						<button className={classNames(_.button, _.button_shawarma)}>Шаурма</button>
					</li>
					<li className={_.item}>
						<button className={classNames(_.button, _.button_pizza)}>Пицца</button>
					</li>
					<li className={_.item}>
						<button className={classNames(_.button, _.button_wok)}>Вок</button>
					</li>
					<li className={_.item}>
						<button className={classNames(_.button, _.button_dessert)}>Десерты</button>
					</li>
					<li className={_.item}>
						<button className={classNames(_.button, _.button_sauce)}>Соусы</button>
					</li>
				</ul>
			</Container>
		</nav>
	)
}

export default Navigation