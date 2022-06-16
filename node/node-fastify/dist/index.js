"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require the framework and instantiate it
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)({
    logger: {
    // prettyPrint: true,
    },
});
server.register(require("@fastify/jwt"), {
    secret: "oneKeyToRuleThemAll",
});
const users = [];
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
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
