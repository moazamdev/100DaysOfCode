import React, { useState, createContext } from "react";
import useToggle from "../logic/useToggle";
import AccordionHeader from "./accordion-header";
import AccordionContent from "./accordion-content";

export const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = ({ header, children }) => {
	const { status: expanded, toggleStatus: toggleExpanded } = useToggle();

	const contextValue = {
		expanded,
		toggleExpanded,
	};

	return (
		<Provider value={contextValue}>
			<div>
				<AccordionHeader>{header}</AccordionHeader>
				<AccordionContent>{children}</AccordionContent>
			</div>
		</Provider>
	);
};

export default Accordion;
