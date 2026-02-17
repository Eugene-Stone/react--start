import { useState } from 'react';
import CounterStyle from './Counter.module.scss';

function Counter() {
	const [count, setCount] = useState(0);

	function handleCountIncrement() {
		setCount(count + 1);
	}
	function handleCountDecrement() {
		if (count > 0) {
			setCount(count - 1);
		}
	}

	return (
		// <div className="counter">
		<div className={CounterStyle.counter}>
			<div>
				<h2>Counter:</h2>
				<h1>{count}</h1>
				<button onClick={handleCountDecrement} className={CounterStyle.plus}>
					<span>Minus</span>
				</button>
				<button onClick={handleCountIncrement} className={CounterStyle.minus}>
					<span>Plus</span>
				</button>
			</div>
		</div>
	);
}

export default Counter;
