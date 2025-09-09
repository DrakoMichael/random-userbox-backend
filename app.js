"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_model_1 = require("./app/models/user_model");
const app = (0, express_1.default)();
const html_1 = __importDefault(require("./html"));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
app.get("/", (req, res) => {
    res.send(html_1.default.render("oi tudo bem"));
});
app.get("/user", (req, res) => {
    const user = new user_model_1.UserModel({
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        age: 30,
    });
    res.send(user);
});
