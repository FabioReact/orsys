import { User } from './types/User'
// Require the framework and instantiate it
import fastify from "fastify";
const server = fastify({
	logger: {
		// prettyPrint: true,
	},
});

server.register(require("@fastify/jwt"), {
	secret: "oneKeyToRuleThemAll",
});

const users: User[] = [];
server.decorateRequest("users", users);

// Routes
server.register(require("./routes/register"));
server.register(require("./routes/login"));
server.register(require("./routes/users"));

// Declare a route
server.get("/", async (request, reply) => {
	return { hello: "world" };
});

// Run the server!
const start = async () => {
	try {
		await server.listen({
			port: 3000,
		});
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};

start();
