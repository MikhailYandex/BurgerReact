import React from 'react';
import Container from '../Container/Container';
import _ from './Navigation.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/category/categorySlice';

const Navigation = () => {
	const { category, activeCategory } = useSelector((state) => state.category);
	const dispatch = useDispatch()

	return (
		<nav className={_.navigation}>
			<Container className={_.container}>
				<ul className={_.list}>
					{category.map((item, i) =>
						<li className={_.item}>
							<button className={classNames(_.button, activeCategory === i ? _.button_active : '')}
							style={{ backgroundImage: `url(${item.image})` }}
							onClick={() => {
								dispatch(changeCategory({ indexCategory: i }))
							}}
							>
								{item.rus}
							</button>
						</li>
					)}
				</ul>
			</Container>
		</nav>
	)
}

export default Navigation