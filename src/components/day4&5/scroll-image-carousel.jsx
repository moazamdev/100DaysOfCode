import { useState, useRef } from "react";
import { flushSync } from "react-dom";

export default function CatFriends() {
	const [index, setIndex] = useState(0);
	let imgRef = useRef(null);

	return (
		<>
			<nav>
				<button
					onClick={() => {
						if (index < catList.length - 1) {
							imgRef.current.style.outline = "none";
							flushSync(() => setIndex(index + 1));
							imgRef.current.scrollIntoView({
								behavior: "smooth",
								block: "nearest",
								inline: "center",
							});
							imgRef.current.style.outline = "2px solid red";
						} else {
							setIndex(0);
						}
					}}
				>
					Next
				</button>
			</nav>
			<div>
				<ul>
					{catList.map((cat, i) => (
						<li key={cat.id}>
							<img
								ref={index == i ? imgRef : null}
								className={index === i ? "active" : ""}
								src={cat.imageUrl}
								alt={"Cat #" + cat.id}
							/>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

const catList = [];
for (let i = 0; i < 10; i++) {
	catList.push({
		id: i,
		imageUrl: "https://placekitten.com/250/200?image=" + i,
	});
}
