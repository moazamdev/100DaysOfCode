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
		set((store) => ({
			tasks: [...store.tasks, { title, state }],
		})),

	deleteTask: (title) =>
		set((store) => ({
			tasks: store.tasks.filter((task) => task.title !== title),
		})),
	setDraggedTask: (title) => set({ draggedTask: title }),
	moveTask: (title, state) =>
		set((store) => ({
			tasks: store.tasks.map((task) =>
				task.title === title ? { title, state } : task
			),
		})),
});

// export const useStore = create(
// 	devtools(
// 		persist(store, {
// 			name: "tasks",
// 		})
// 	)
// );
export const useStore = create(store);
