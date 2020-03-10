import express from "express"
import request from "../request"
import bodyParser from 'body-parser'

class getUserByToken extends request {
  constructor() {
    super();
    this.get = {
      path: "/user",
      auth: true,
      function: (req: any, res) => {
        res.json(req.user)
      }
    };
  }
}

export default getUserByToken;