"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (fastify, opts) => {
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
};
