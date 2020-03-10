import express from "express"
import request from "../request"
import bodyParser from 'body-parser'
import User from "../../../database/schemas/user"

class register extends request {
  db = null;
  auth = null;
  constructor(lib) {
    super();
    this.db = lib.db;
    this.auth = lib.auth;
    this.post = {
      auth: false,
      middleware: [bodyParser.json()],
      path: "/register",
      function: (req, res) => {
        console.log(req.body)
        const user = new User(req.body);
        this.db.saveUser(user).then(result => {
          const token = this.auth.generateToken({
            name: user.name,
            role: user.role || "user",
            id: user.id
          });
          res.cookie('token', token, { httpOnly: true }).send({
            status: "ok",
            user: {
              id: user.id,
              name: user.name,
              role: user.role || "user",
              token
            }
            // token: token
          })
          res.end();
        }).catch(err => {
          let messages = [];
          for (const i in err.errors) {
            if (err.errors[i].name === "ValidatorError") {
              messages.push(err.errors[i].message);
            }
          }
          res.send({
            status: "error",
            message: "validation error",
            messages: messages
          })
          res.end();
        })
      }
    }
  }
}
export default register;