import argon2 from "argon2";
import { FastifyInstance, FastifyServerOptions } from 'fastify'
import { v4 as uuidv4 } from "uuid";

export default async (fastify: FastifyInstance, opts: FastifyServerOptions) => {

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

	fastify.post<{
		Body: {
			username: string,
			password: string,
		}
	}>("/register", options, async (request, reply) => {
		try {
			const hash = await argon2.hash(request.body.password);
			const id = uuidv4();
			(request as any).users.push({
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
};
