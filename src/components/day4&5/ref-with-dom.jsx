import React, { useRef, forwardRef } from "react";

const RefComponent = () => {
	const inputRef = useRef(null);
	const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "Hello World";
    };
	return (
		<>
			<input type="text" ref={inputRef} />
			<button onClick={handleClick}>Focus the input</button>
		</>
	);
};

export default RefComponent;
