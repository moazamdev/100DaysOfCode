import React, { useState } from "react";

const Amount = ({ render }) => {
	const [amount, setAmount] = useState(0);

	const onIncrement = () => {
		setAmount(amount + 1);
	};

	const onDecrement = () => {
		setAmount(amount - 1);
	};

	return (
		<div>
			<span>US Dollar: {amount} </span>

			<button type="button" onClick={onIncrement}>
				+
			</button>
			<button type="button" onClick={onDecrement}>
				-
			</button>

			{render(amount)}
		</div>
	);
};

export default Amount;
