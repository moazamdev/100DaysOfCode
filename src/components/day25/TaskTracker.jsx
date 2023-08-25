import Column from "./column";

const TaskTracker = () => {
	return (
		<>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<h1>Task Tracker</h1>
			</div>
			<Column state={"PLANNED"} />
			<Column state={"ONGOING"} />
			<Column state={"DONE"} />
		</>
	);
};

export default TaskTracker;
