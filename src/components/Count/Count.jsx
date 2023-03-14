import React, { useState } from "react";
import _ from './Count.module.css'

const Count = (props) => {
	const [count, setCount] = useState(props.count)

	const addCount = () => {
		setCount(count + 1)
	}

	const removeCount = () => {
		if (count > 1) {
			setCount(count - 1)
		}
	}

  return (
    <div className={_.count}>
      <button className={_.minus} onClick={removeCount} disabled={count === 1}>-</button>
      <p className={_.amount}>{count}</p>
      <button className={_.plus} onClick={addCount}>+</button>
    </div>
  );
};

export default Count;
