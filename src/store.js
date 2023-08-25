import { useEffect, useRef } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
	tasks: [
		{ title: "JavaScript", state: "PLANNED" },
		{ title: "Firebase", state: "PLANNED" },
		{ title: "React", state: "ONGOING" },
		{ title: "Next JS", state: "ONGOING" },
		{ title: "Bootstrap", state: "DONE" },
		{ title: "Tailwind CSS", state: "DONE" },
	],
	draggedTask: null,
	addTask: (title, state) =>
		set(
			(store) => ({
				tasks: [...store.tasks, { title, state }],
			}),
			false,
			"addTask"
		),

	deleteTask: (title) =>
		set(
			(store) => ({
				tasks: store.tasks.filter((task) => task.title !== title),
			}),
			false,
			"deleteTask"
		),
	setDraggedTask: (title) =>
		set({ draggedTask: title }, false, "setDraggedTask"),
	moveTask: (title, state) =>
		set(
			(store) => ({
				tasks: store.tasks.map((task) =>
					task.title === title ? { title, state } : task
				),
			}),
			false,
			"moveTask"
		),
});

export const useStore = create(persist(devtools(store), { name: "store" }));

function RefTest() {
	const ref = useRef();

	useEffect(() => {
		useStore.subscribe(
			(store) => store.tasks,
			(tasks) => (ref.current = tasks)
		);
	}, []);

	return ref.current;
}
