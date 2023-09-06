import MyColumn from "./column";

const TaskTracker = () => {
	return (
		<>
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
