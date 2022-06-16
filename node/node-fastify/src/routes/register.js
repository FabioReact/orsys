const argon2 = require("argon2");
const { v4: uuidv4 } = require("uuid");

module.exports = function (fastify, opts, done) {
  const options = {
		schema: {
			body: {
				type: "object",
				properties: {
					username: { type: "string", minLength: 2, maxLength: 20 },
					password: { type: "string", minLength: 8, maxLength: 30 },
				},
				required: ["username", "password"],
				additionalProperties: false,
			},
		},
	};

	fastify.post("/register", options, async (request, reply) => {
		try {
			const hash = await argon2.hash(request.body.password);
			const id = uuidv4();
			request.users.push({
				id, // equivalent à id: id
				username: request.body.username,
				password: hash,
			});
			reply.statusCode = 201;
			return {
				id: 1,
				username: request.body.username,
			};
		} catch (err) {
			reply.code(500).send({
				message: "Houston, we have a problem!",
			});
		}
	});
  done()
}