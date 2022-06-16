const users = [
	{
		id: 1,
		name: "Fabio",
	},
	{
		id: 2,
		name: "Geoffrey",
	},
];

const getUsers = () =>
	new Promise((resolve, reject) => {
		if (users.length === 0) reject("Empty array");
		setTimeout(() => {
			resolve(users);
		}, 1000);
	});

// version avec then
getUsers()
	.then((users) => {
		return users;
	})
	.catch((error) => {
		console.error(error);
	})
	.finally(() => {
		console.log("Traitement terminé");
	});

// version avec async await
const getFirstUser = async () => {
	try {
		const users = await getUsers();
		return users[0];
	} catch (error) {
		console.error(error);
	}
	console.log("Traitement terminé");
};

getFirstUser();

// fetch("https://randomuser.me/api/", {
// 	method: "GET",
// })
// 	.then((response) => response.json())
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

fetch("https://jsonplaceholder.typicode.com/posts/1", {
	method: "PUT",
	body: JSON.stringify({
		title: "Titre test",
		body: "Contenu test",
		userId: 1,
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8",
	},
})
	.then((response) => response.json())
	.then((result) => {
		return result;
	})
	.catch((error) => {
		console.log(error);
	});

const getFirstPost = async () => {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/posts/1",
		);
		const result = await response.json();
		return result;
	} catch (e) {
		console.log(e);
	}
};

getFirstPost();
