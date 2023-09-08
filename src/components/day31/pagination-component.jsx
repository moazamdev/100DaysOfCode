import React, { useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import axios from "axios";

const PAGE_SIZE = 50;

const fetcher = (url) => axios.get(url).then((res) => res.data);

const getKey = (pageIndex, previousPageData) => {
	if (previousPageData && previousPageData.length < PAGE_SIZE) return null;
	return `https://jsonplaceholder.typicode.com/posts?_start=${
		pageIndex * PAGE_SIZE
	}&_limit=${PAGE_SIZE}`;
};

function PaginationComponent() {
	const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

	if (!data) return <div>Loading...</div>;
	if (error) return <div>Error loading data</div>;

	const allPosts = data.reduce((acc, page) => [...acc, ...page], []);

	return (
		<div
			className="App"
			style={{
				// width:"70%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					width: "70%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<h1>SWR Infinite Scroll Pagination</h1>
				<div className="post-list">
					{allPosts.map((post) => (
						<>
							<div key={post.id} className="post">
								<h2>
									{post.id}: {post.title}
								</h2>
								<p>{post.body}</p>
							</div>
						</>
					))}
				</div>
				<button
					onClick={() => setSize(size + 1)}
					disabled={data[data.length - 1].length < PAGE_SIZE}
				>
					Load More
				</button>
			</div>
		</div>
	);
}

export default PaginationComponent;
