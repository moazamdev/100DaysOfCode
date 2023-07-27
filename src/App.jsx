import React from "react";
import ComplexList from "./components/complexlist";
import NestedList from "./components/nestedlist";
import List from "./components/list";

import Amount from "./components/amount";
import { Euro, Pound } from "./components/currency";

import MouseTracker from "./components/mouse-tracker";
import Toggle from "./components/toggle";
import ToggleChild from "./components/toggle-child";

const App = () => {
	return (
		<>
			{/* Day 4 */}
			

			{/* Day 1 & 2 & 3 */}
			{/* <Toggle
				render={({ isToggled = false, toggle }) => (
					<ToggleChild isToggled={isToggled} toggle={toggle} />
				)}
			/>
			<MouseTracker
				render={({ mousePosition }) => (
					<h1>
						Mouse Position: {mousePosition.x}, {mousePosition.y}
					</h1>
				)}
			/> */}

			{/* <Amount>
				{(amount) => (
					<>
						<Euro amount={amount} />
						<Pound amount={amount} />
					</>
				)}
			</Amount> */}
			{/* <Amount
				render={(amount) => (
					<>
						<Euro amount={amount} />
						<Pound amount={amount} />
					</>
				)}
			/> */}

			{/* <ComplexList /> */}
			{/* <NestedList /> */}
			{/* <List /> */}
		</>
	);
};

export default App;
