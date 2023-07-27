import React, { useContext } from "react";
import { AccordionContext } from "./accordion";

const AccordionIcon = ({ opened = "-", closed = "+"}) => {
    const expanded = useContext(AccordionContext);
    
    return (
        <span>{expanded ? opened : closed}</span>
    )
}

export default AccordionIcon;