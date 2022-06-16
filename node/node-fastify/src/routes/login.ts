import argon2 from "argon2";
import { FastifyInstance, FastifyServerOptions } from "fastify";
import { User } from '../types/User'

export default async (fastify: FastifyInstance, opts: FastifyServerOptions) => {
	fastify.post<{
		Body: User
	}>("/login", async (request, reply) => {
		try {
			const { username, password } = request.body;
			const currentUser = (request as any).users.find(
				(user: User) => user.username === username,
			);
			if (await argon2.verify(currentUser.password, password)) {
				const token = (fastify as any).jwt.sign({
					id: currentUser.id,
					username,
				});
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
};
