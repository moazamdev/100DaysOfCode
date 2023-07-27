import React from "react";
const ToggleChild = ({ toggle, isToggled }) => {
	return (
		<div>
			<button onClick={toggle}>Toggle Content</button>
			{isToggled && <p>This content is now visible!</p>}
		</div>
	);
};

export default ToggleChild;
