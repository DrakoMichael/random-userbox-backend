"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteUsers = void 0;
const express_1 = require("express");
const user_model_1 = require("../models/user_model");
class RouteUsers {
    router;
    id;
    name;
    email;
    age;
    constructor() {
        this.router = (0, express_1.Router)();
        this.id = "";
        this.name = "";
        this.email = "";
        this.age = 0;
    }
    main() {
        this.router.get("/", (_req, res) => {
            const user = new user_model_1.UserModel({
                id: "1",
                name: "John Doe",
                email: "john@example.com",
                age: 30,
            });
            res.send(user);
        });
        return this.router;
    }
}
exports.RouteUsers = RouteUsers;
exports.default = new RouteUsers().main();
