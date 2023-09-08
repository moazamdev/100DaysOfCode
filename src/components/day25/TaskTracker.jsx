import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";

import { useStore } from "../../store";
// import Task from "./task";
import classNames from "classnames";
import "./column.css";

import "./task.css";

function Task({ title, state }) {
	const setDraggedTask = useStore((state) => state.setDraggedTask);
	const deleteTask = useStore((state) => state.deleteTask);

	const taskStyle = {
		border: "1px solid #333",
		background: "#444",
		height: "30px",
		borderRadius: "5px",
		display: "flex",
		alignItems: "center",
		padding: "1rem",
		marginTop: "1rem",
		position: "relative",
		cursor: "move",
	};

	const statusStyles = {
		// background: "#333",
		position: "absolute",
		bottom: ".5rem",
		right: ".5rem",
		fontSize: ".8rem",
		padding: ".2rem .5rem",
		borderRadius: ".5rem",
	};
	// console.log(state)

	return (
		<div
			style={taskStyle}
			draggable
			onDragStart={() => setDraggedTask(title)}
		>
			<img
				src="../../public/trash.png"
				width={"30px"}
				height={"auto"}
				style={{ cursor: "pointer", marginRight: "1em" }}
				onClick={() => deleteTask(title)}
			/>
			<div>{title}</div>
			<div style={statusStyles} className={state}>
				<div>{state}</div>
			</div>
		</div>
	);
}

const MyColumn = ({ state }) => {
	const [currentTask, setCurrentTask] = useState("");
	const [drop, setDrop] = useState(false);

	const tasks = useStore((state) => state.tasks);
	// console.log(tasks)
	const filtered = useMemo(
		() => tasks.filter((task) => task.state === state),
		[tasks, state]
	);
	const addTask = useStore((state) => state.addTask);
	const draggedTask = useStore((state) => state.draggedTask);
	const setDraggedTask = useStore((state) => state.setDraggedTask);
	const moveTask = useStore((state) => state.moveTask);

	const style = {
		// border: "1px solid transparent",
		background: "#333",
		borderRadius: "5px",
		width: "500px",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		padding: "1rem",
		margin: "1rem",
	};

	return (
		<div
			style={style}
			onDragLeave={(e) => {
				setDrop(false);
				e.preventDefault();
			}}
			onDragOver={(e) => {
				setDrop(true);
				e.preventDefault();
			}}
			onDrop={(e) => {
				setDrop(false);
				moveTask(draggedTask, state);
				setDraggedTask(null);
			}}
			className={classNames("column", { drop: drop })}
			// className={`bg-red ${
			// 	drop
			// 		? "border-2 border-dashed border-white"
			// 		: "border-2 border-transparent border-dashed"
			// }`}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<p>{state}</p>
				<div>
					<input
						type="text"
						value={currentTask}
						onChange={(e) => setCurrentTask(e.target.value)}
						placeholder="Enter task title..."
					/>
					<button
						onClick={() => {
							addTask(currentTask, state);
							setCurrentTask("");
						}}
					>
						Add Task
					</button>
				</div>
			</div>

			{/* {tasks.length === 0 && <p>No tasks yet!</p>}

			{tasks.map((task) => (
				<Task key={task.title} title={task.title} state={task.state} />
			))} */}
			{filtered.length === 0 && <p>No tasks yet!</p>}

			{filtered.map((task) => (
				<Task key={task.title} title={task.title} state={task.state} />
			))}
		</div>
	);
};

const TaskTracker = () => {
	return (
		<>
			<Helmet>
				<title>Task Tracker</title>
			</Helmet>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<h1>Task Tracker</h1>
			</div>
			<MyColumn state={"PLANNED"} />
			<MyColumn state={"ONGOING"} />
			<MyColumn state={"DONE"} />
		</>
	);
};

export default TaskTracker;
