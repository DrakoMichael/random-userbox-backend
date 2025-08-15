import express from "express";
import { UserModel } from "./app/models/user_model";
import User from "./app/interfaces/user_interface";
const app = express();
import html from "./html";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send(html.render("oi tudo bem"));
});

app.get("/user", (req, res) => {
  const user: User = new UserModel({
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    age: 30,
  });

  res.send(user);
});
