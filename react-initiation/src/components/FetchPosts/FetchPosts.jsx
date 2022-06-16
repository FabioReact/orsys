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
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			});
	}, []);
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
