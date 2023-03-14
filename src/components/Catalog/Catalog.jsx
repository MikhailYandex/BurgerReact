import React from 'react';
import Order from '../Order/Order';
import Container from '../Container/Container';
import _ from './Catalog.module.css'
import CatalogProduct from '../CatalogProduct/CatalogProduct';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

const Catalog = () => {
	return (			
		<section className={_.catalog}>
			<Container className={_.container}>
				<Order/>
				<div className={_.wrapper}>
					<h2 className={_.title}>Бургеры</h2>
					<div className={_.wrap_list}>
						<ul className={_.list}>
							{goodsList.map(item => (
								<li className={_.item}>
									<CatalogProduct title={item.title}/>
								</li>
							))}
							
						</ul>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Catalog