import React from "react";
// import ComplexList from "./components/complexlist";
// import NestedList from "./components/nestedlist";
// import List from "./components/list";

// import Amount from "./components/amount";
// import { Euro, Pound } from "./components/currency";

// import MouseTracker from "./components/mouse-tracker";
// import Toggle from "./components/toggle";
// import ToggleChild from "./components/toggle-child";

// import RefComponent from "./components/day4&5/ref-with-dom";
// import VideoPlayer from "./components/day4&5/play-pause-video";
// import FocusInput from "./components/day4&5/focus-the-input";
// import CatFriends from "./components/day4&5/scroll-image-carousel";
// import Todo from "./components/day7/todoapp";
// import Todo2 from "./components/day7/composition-todoapp";

import AsyncStateButton from "./components/day8/async-state-button";
import ToggleEffect from "./components/day8/toggleEffect";
import ToggleWithTitle from "./components/day8/useEffectToggleWithTitle";
import TimerComponent from "./components/day8/timer";
import Stopwatch from "./components/day8/stopwatch";

const App = () => {
	return (
		<>
			{/* Day 8 */}
			{/* <AsyncStateButton/>
			<ToggleEffect /> */}
			{/* <ToggleWithTitle /> */}
			{/* <TimerComponent /> */}
			<Stopwatch />

			{/* Day 7 */}
			{/* <Todo2 /> */}

			{/* Day 4 & 5 */}
			{/* <RefComponent /> */}

			{/* <VideoPlayer /> */}

			{/* <FocusInput /> */}

			{/* <CatFriends /> */}

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
