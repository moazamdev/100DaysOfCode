import React from "react";

import useCourseStore from "./courseStore";

const CourseList = () => {
	const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
		(state) => ({
			courses: state.courses,
			removeCourse: state.removeCourse,
			toggleCourseStatus: state.toggleCourseStatus,
		})
	);

	return (
		<div>
			{courses.map((course) => (
				<div key={course.id}>
					<li>
						<span>
							<input
								type="checkbox"
								checked={course.completed}
								onChange={(e) => toggleCourseStatus(course.id)}
							/>
						</span>
                        <span>{course.title}</span>
                        <button onClick={() => removeCourse(course.id)}>X</button>
					</li>
				</div>
			))}
		</div>
	);
};

export default CourseList;
