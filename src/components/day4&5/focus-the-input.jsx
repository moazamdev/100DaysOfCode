import { useRef } from "react";

export default function FocusInput() {
	let inputRef = useRef(null);
	const handleClick = () => {
		inputRef.current.focus();
		inputRef.current.style.transform = "rotate(180deg)";
	};
	return (
		<>
			<nav>
				<button onClick={handleClick}>Search</button>
			</nav>
			<input ref={inputRef} placeholder="Looking for something?" />
		</>
	);
}
