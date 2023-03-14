import React from "react";
import Count from "../Count/Count";
import _ from './OrderGoods.module.css'

const OrderGoods = ({item}) => {
  return (
    <li className={_.item}>
      <img className={_.image} src="img/burger_1.jpg" alt={item}/>
      <div className={_.goods}>
        <h3 className={_.title}>{item}</h3>
        <p className={_.weight}>512г</p>
        <p className={_.price}>
          1279
          <span className="currency">₽</span>
        </p>
      </div>
			<Count count={1}/>
    </li>
  );
};

export default OrderGoods;
