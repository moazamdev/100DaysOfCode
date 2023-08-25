import classNames from "classnames";
import { useStore } from "../../store";
import "./task.css";

export default function Task({ title, state }) {
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
				src="src\assets\trash.png"
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
