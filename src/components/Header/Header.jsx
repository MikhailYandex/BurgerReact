import React from 'react';
import _ from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Container } from '../Container/Container';

const Header = () => {
	return (
		<div>
			<header className={_.header}>
    		<Container className={_.header__container}>
      		<img className={_.header__logo} src={logo} alt="Логотип YourMeal"/>
      		<div className={_.header__wrapper}>
        		<h1 className={_.header__title}>
          		<span>Только самые</span>
         			<span className={_.header__red}>сочные бургеры!</span>
        		</h1>
        		<p className={_.header__appeal}>Бесплатная доставка от 599₽</p>
      		</div>
    		</Container>
  		</header>
		</div>
	)
}

export default Header