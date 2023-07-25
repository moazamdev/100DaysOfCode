import { useState, useCallback, useMemo } from "react";

const useToggle = () => {
	// create a state variable called status
	const [status, setStatus] = useState(false);

	// create a function called toggleStatus
	// that will toggle the value of status
	// between true and false
	// useCallback will prevent the function
	// from being recreated on every render
	const toggleStatus = useCallback(
		() => setStatus((prevStatus) => !prevStatus),
		[]
	);

	// create an object called values
	// that contains the status and toggleStatus
	// values
	// useMemo will prevent the object from being
	// recreated on every render
	const values = useMemo(
		() => ({ status, toggleStatus }),
		[status, toggleStatus]
	);

	return values;
};

export default useToggle;
