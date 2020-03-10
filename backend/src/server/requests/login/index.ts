import express from "express"
import request from "../request"
import bodyParser from 'body-parser'
import User from "../../../database/schemas/user"

class login extends request {
  db = null;
  auth = null;
  constructor(lib) {
    super();
    this.db = lib.db;
    this.auth = lib.auth;
    this.post = {
      auth: false,
      middleware: [bodyParser.json()],
      path: "/login",
      function: (req, res) => {
        const user = new User(req.body);
        this.db.checkUser(user).then(result => {
          const token = this.auth.generateToken({
            name: user.name,
            role: user.role || "user",
            id: user.id
          });
          if (result) {
            res.cookie('token', token, { httpOnly: true }).send({
              status: "ok",
              user: {
                id: user.id,
                name: user.name,
                role: user.role || "user",
                token
              }
            })
          } else {
            res.status(401).send({
              status: "error",
              message: "user not found"
            })
          }
          res.end();
        })
      }
    }
  }
}
export default login;