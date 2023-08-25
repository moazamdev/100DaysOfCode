import { useMemo, useState } from "react";
import { useStore } from "../../store";
import Task from "./Task";
import classNames from "classnames";
import "./column.css";

const Column = ({ state }) => {
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

export default Column;
