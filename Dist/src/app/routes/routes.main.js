"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteMain = void 0;
const express_1 = require("express");
class RouteMain {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
    }
    main() {
        this.router.get("/", (_req, res) => {
            res.send("Hello, from main!");
        });
        return this.router;
    }
}
exports.RouteMain = RouteMain;
exports.default = new RouteMain().main();
