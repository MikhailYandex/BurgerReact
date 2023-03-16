import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modalDelivery/ModalDeliverySlice";
import { orderRequestAsync } from "../../store/order/orderSlice";
import OrderGoods from "../OrderGoods/OrderGoods";
import _ from "./Order.module.css";

const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(
    (state) => state.order
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={_.order}>
      <section className={_.wrapper}>
        <div className={_.header} tabIndex="0" role="button">
          <h2 className={_.title}>Корзина</h2>
          <span className={_.count}>{totalCount}</span>
        </div>
        <div className={_.wrap_list}>
          <ul className={_.list}>
            {orderGoods.map((item) => (
              <OrderGoods key={item.id} {...item} />
            ))}
          </ul>
          <div className={_.total}>
            <p>Итого</p>
            <p>
              <span className={_.amount}>{totalPrice}</span>
              <span className="currency">&nbsp;₽</span>
            </p>
          </div>
          <button
            className={_.submit}
            disabled={orderGoods.length < 1}
            onClick={() => {
              dispatch(openModal());
            }}
          >
            Оформить заказ
          </button>
          <div className={_.apeal}>
            <p className={_.text}>Бесплатная доставка</p>
            <button className={_.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
