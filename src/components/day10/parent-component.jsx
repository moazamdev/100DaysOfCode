import * as React from "react";
import TheChild from "./child-component";

const TheFather = () => {
    const [name, setName] = React.useState("john")

    const handleChildClick = React.useCallback(
        () => {
            console.log(name);
        }, [name]
    )
    const handleClick = () => {
        console.log("Parent", name)
    }

    return (
        <div>
            <h2>Hello</h2>
            <button onClick={handleClick}> Send </button>
            <input type="text" onChange={e => setName(e.target.value)} value={name} />
            <TheChild handleChildClick={handleChildClick} details={"hello"} valuePassing={name} />
        </div>
    )
}

export default TheFather;