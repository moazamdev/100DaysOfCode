import React, { useContext } from "react";
import { AccordionContext } from "./accordion";

const AccordionContent = ({ children }) => {
	const { expanded } = useContext(AccordionContext);

	return expanded && children;
};

export default AccordionContent;
