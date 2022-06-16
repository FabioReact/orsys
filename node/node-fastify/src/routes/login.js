const argon2 = require("argon2");

module.exports = function (fastify, opts, done) {
	fastify.post("/login", async (request, reply) => {
		try {
			const { username, password } = request.body;
			const currentUser = request.users.find((user) => user.username === username);
			if (await argon2.verify(currentUser.password, password)) {
				const token = fastify.jwt.sign({
					id: currentUser.id,
					username,
				})
				return {
					token,
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
	done();
};
