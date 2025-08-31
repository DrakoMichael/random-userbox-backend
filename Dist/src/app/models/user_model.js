"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    id;
    name;
    email;
    age;
    constructor(data) {
        Object.assign(this, data);
    }
    toJSON() {
        return { ...this };
    }
}
exports.UserModel = UserModel;
