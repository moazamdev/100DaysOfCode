import React from "react";
import useSWR from "swr";
import useSWRSubscription from "swr/subscription";

const fetcher = async (url) => {
	const res = await fetch(url);
	return res.json();
};

const GitHubRepo = ({ repo }) => {
	const { data: repoData, error } = useSWR(
		`https://api.github.com/repos/${repo}`,
		fetcher
	);

	if (error) return <div>Error loading repo data</div>;
	if (!repoData) return <div>Loading...</div>;

	return (
		<div>
			<h2>{repoData.name}</h2>
			<p>Stars: {repoData.stargazers_count}</p>
		</div>
	);
};

const PopularRepos = () => {
	const { data: popularRepos, mutate } = useSWR(
		"https://api.github.com/search/repositories?q=stars:>50000&sort=stars&order=desc",
		fetcher
	);

	useSWRSubscription("repos:update", () => {
		// When the 'repos:update' event is triggered, revalidate the popular repos.
		// mutate();
	});

	if (!popularRepos) return <div>Loading popular repos...</div>;

	return (
		<div>
			{popularRepos.items.map((repo) => (
				<GitHubRepo key={repo.id} repo={repo.full_name} />
			))}
		</div>
	);
};

function GithubApp() {
	return (
		<div className="App">
			<h1>Most Popular GitHub Repositories</h1>
			<PopularRepos />
		</div>
	);
}

export default GithubApp;
