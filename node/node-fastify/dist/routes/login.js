"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon2_1 = __importDefault(require("argon2"));
exports.default = async (fastify, opts) => {
    fastify.post("/login", async (request, reply) => {
        try {
            const { username, password } = request.body;
            const currentUser = request.users.find((user) => user.username === username);
            if (await argon2_1.default.verify(currentUser.password, password)) {
                const token = fastify.jwt.sign({
                    id: currentUser.id,
                    username,
                });
                return {
                    token,
                };
            }
            else {
                reply.code(401).send({
                    message: "Wrong username and/or password",
                });
            }
        }
        catch (err) {
            reply.code(500).send({
                message: "Houston, we have a problem!",
            });
        }
    });
};
