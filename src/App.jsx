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

// import AsyncStateButton from "./components/day8/async-state-button";
// import ToggleEffect from "./components/day8/toggleEffect";
// import ToggleWithTitle from "./components/day8/useEffectToggleWithTitle";
// import TimerComponent from "./components/day8/timer";
// import Stopwatch from "./components/day8/stopwatch";

// import { SaveButton, StatusBar } from "./components/day9/network-checker";
// import Form from "./components/day9/form-input";

// import TheFather from "./components/day10/parent-component";
// import CourseForm from "./components/day24/app/CourseForm";
// import CourseList from "./components/day24/app/CourseList";

// import Column from "./components/day25/column";

import TaskTracker from "./components/day25/TaskTracker";
import APIApp from "./components/day29/app";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PaginationComponent from "./components/day31/pagination-component";
import GithubApp from "./components/day31/covid-component";

const App = () => {
	const latitude = 40.7128;
	const longitude = -74.006;
	return (
		<>
			{/* Day 25 */}
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route
							index
							element={
								<>
									<h2>
										Welcome to my 100DaysOfCode Challenge
									</h2>
									<Link to={"/task-tracker"}>
										TaskTracker
									</Link>
									<Link to={"/api-calls"}>APIApp</Link>
									<Link to={"/pagination"}>
										PaginationComponent
									</Link>
								</>
							}
						/>
						<Route path="task-tracker" element={<TaskTracker />} />
						<Route path="api-calls" element={<APIApp />} />
						<Route
							path="pagination"
							element={<PaginationComponent />}
						/>
						<Route path="covid" element={<GithubApp />} />
					</Route>
				</Routes>
			</BrowserRouter>
			{/* <TaskTracker /> */}

			{/* Day 24 */}
			{/* <CourseForm />
			<CourseList /> */}

			{/* Day 10 */}
			{/* <TheFather /> */}

			{/* Day 9 */}
			{/* <SaveButton />
			<StatusBar />
			<Form /> */}

			{/* Day 8 */}
			{/* <AsyncStateButton/>
			<ToggleEffect /> */}
			{/* <ToggleWithTitle /> */}
			{/* <TimerComponent /> */}
			{/* <Stopwatch /> */}

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
