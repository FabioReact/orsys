"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon2_1 = __importDefault(require("argon2"));
const uuid_1 = require("uuid");
exports.default = async (fastify, opts) => {
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
            const hash = await argon2_1.default.hash(request.body.password);
            const id = (0, uuid_1.v4)();
            request.users.push({
                id,
                username: request.body.username,
                password: hash,
            });
            reply.statusCode = 201;
            return {
                id: 1,
                username: request.body.username,
            };
        }
        catch (err) {
            reply.code(500).send({
                message: "Houston, we have a problem!",
            });
        }
    });
};
