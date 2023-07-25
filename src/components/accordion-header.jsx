import React, { useContext } from "react";
import { AccordionContext } from "./accordion";
import AccordionIcon from "./accordion-icon";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const AccordionHeader = ({ children }) => {
	const { expanded, toggleExpanded } = useContext(AccordionContext);

	return (
		<button onClick={toggleExpanded}>
			{children}{" "}
			<AccordionIcon
				closed={<BsArrowDownCircle/>}
				opened={<BsArrowUpCircle/>}
			/>
		</button>
	);
};

export default AccordionHeader;
