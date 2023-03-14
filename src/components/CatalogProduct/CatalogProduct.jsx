import React from 'react';
import _ from './CatalogProduct.module.css'

const CatalogProduct = (props) => {
	return (
		<article className={_.product}>
			<img src="img/photo-5.jpg" alt={props.title} className={_.image}/>
			<p className={_.price}>689<span className="currency">₽</span></p>
			<h3 className={_.title}>
				<button className={_.detail}>{props.title}</button>
			</h3>
			<p className={_.weight}>520г</p>
			<button className={_.add} type="button">Добавить</button>
		</article>
	)
}

export default CatalogProduct