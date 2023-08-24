import React, { useState } from "react";

import useCourseStore from "./courseStore";

const CourseForm = () => {
	const addCourse = useCourseStore((state) => state.addCourse);

	const [courseTitle, setCourseTitle] = useState("");
	console.log("CourseForm rendered");

	const handleCourseSubmit = (e) => {
		if (!courseTitle) return alert("Please enter a course title");

		addCourse({
			id: Math.floor(Math.random() * 1000),
			title: courseTitle,
		});

		setCourseTitle("");
	};

	return (
		<div>
			<input
				type="text"
				value={courseTitle}
				onChange={(e) => {
					setCourseTitle(e.target.value);
				}}
			/>
			<button onClick={() => handleCourseSubmit()}>Add Course</button>
		</div>
	);
};

export default CourseForm;
