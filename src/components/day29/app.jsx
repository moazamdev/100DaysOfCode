import React, { useState, useEffect } from "react";
import useDataApi from "./use-hacker-news-api";
import "./styles.scss";

function App() {
	const [query, setQuery] = useState("redux");
	const [{ data, isLoading, isError }, doFetch] = useDataApi(
		"http://hn.algolia.com/api/v1/search?query=redux",
		{ hits: [] }
	);
	return (
		<div
			style={{
				marginTop: "2em",
			}}
		>
			<h1
				style={{
					textAlign: "center",
				}}
			>
				Hacker News API
			</h1>
			<form
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				onSubmit={(e) => {
					doFetch(
						`http://hn.algolia.com/api/v1/search?query=${query}`
					);
					e.preventDefault();
				}}
			>
				<input
					type="text"
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<button type="submit">Search</button>
			</form>

			{isError && <div>Something went wrong ...</div>}
			{isLoading ? (
				<div>Loading ...</div>
			) : (
				<ul>
					{data.hits.map((item) => (
						<li key={item.objectID} className="myListItem">
							<a href={item.url}>{item.title}</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default App;
