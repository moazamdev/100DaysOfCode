import React from "react";
import MyColumn from "./column";
import { Helmet } from "react-helmet";

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
