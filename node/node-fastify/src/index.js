// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const argon2 = require("argon2");

const users = [];
fastify.decorateRequest('users', users) //

// Routes
fastify.register(require('./routes/register')) //

// Declare a route
fastify.get("/", async (request, reply) => {
	return { hello: "world" };
});

// Users
fastify.get("/users/:id", async (request, reply) => {
	return {
		userId: request.params.id,
	};
});

fastify.get("/users", async (request, reply) => {
	return {
		users,
	};
});

// Créer la route /register où l'on envoyer un username et un password - on renverra à l'utilisateur son id et son username


fastify.post("/login", async (request, reply) => {
	try {
		const { username, password } = request.body;
		const currentUser = users.find((user) => user.username === username);
		if (await argon2.verify(currentUser.password, password)) {
			return {
				token: "welcome!",
			};
		} else {
			reply.code(401).send({
				message: "Wrong username and/or password",
			});
		}
	} catch (err) {
		reply.code(500).send({
			message: "Houston, we have a problem!",
		});
	}
});

// Run the server!
const start = async () => {
	try {
		await fastify.listen({
			port: 3000,
		});
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();
