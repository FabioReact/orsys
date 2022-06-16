import { useEffect, useState } from "react";

const PostItem = ({ title, content }) => {
	return (
		<div>
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
};

const FetchPosts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		console.log("Ne va s'executer que lors de la création du composant");
		const controller = new AbortController();
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "GET",
			signal: controller.signal,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			});
		return () => {
			console.log("Destruction du composant");
			// Ici, j'annule le fetch si celui-ci ne s'est pas terminé et que le composant va se démonter de l'UI
			controller.abort();
		};
	}, []);
	useEffect(() => {
		console.log("Création et mise à jour de posts");
	}, [posts]);
	return (
		<section>
			<h2>JSON Placeholder Posts</h2>
			{posts.map((post) => (
				<PostItem key={post.id} title={post.title} content={post.body} />
			))}
		</section>
	);
};

export default FetchPosts;
