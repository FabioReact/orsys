import { User } from './../types/User'
import { FastifyInstance, FastifyRequest, FastifyServerOptions } from 'fastify'

type RequestParams = {
	id: string
}

export default async (fastify: FastifyInstance, opts: FastifyServerOptions) => {
	fastify.get("/users/:id", async (request, reply) => {
		return {
			userId: (request.params as RequestParams).id,
		};
	});

	fastify.get("/users", async (request: FastifyRequest, reply) => {
		return {
			users: (request as any).users,
		};
	});
};
