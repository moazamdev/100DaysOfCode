import React, { useState } from "react";

const Toggle = ({ render }) => {
	const [isToggled, setIsToggled] = useState(false);

    const toggle = () => setIsToggled(!isToggled);

	return (<>
        <h2>This is extra text</h2>
        {render({ isToggled, toggle })}
    </>)
};

export default Toggle;
