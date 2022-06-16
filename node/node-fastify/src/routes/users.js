module.exports = function (fastify, opts, done) {
	fastify.get("/users/:id", async (request, reply) => {
		return {
			userId: request.params.id,
		};
	});

	fastify.get("/users", async (request, reply) => {
		return {
			users: request.users,
		};
	});
	done();
};
