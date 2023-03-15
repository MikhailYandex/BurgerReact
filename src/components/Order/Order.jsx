import React from 'react';
import OrderGoods from '../OrderGoods/OrderGoods';
import _ from './Order.module.css'

const OrderList = [ 'Супер сырный', 'Картошка фри', 'Жгучий хот-дог' ]

const Order = () => {
	return (
		<div className={_.order}>
			<section className={_.wrapper}>
				<div className={_.header} tabIndex="0" role="button">
					<h2 className={_.title}>Корзина</h2>
					<span className={_.count}>4</span>
				</div>
				<div className={_.wrap_list}>
					<ul className={_.list}>
						{OrderList.map((item, i) => <OrderGoods key={i} item={item} />)}
					</ul>
					<div className={_.total}>
						<p>Итого</p>
						<p>
							<span className={_.amount}>1279</span>
							<span className="currency">₽</span>
						</p>
					</div>
					<button className={_.submit}>Оформить заказ</button>
					<div className={_.apeal}>
						<p className={_.text}>Бесплатная доставка</p>
						<button className={_.close}>Свернуть</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Order