import express from "express"
import request from "../request"

let i = 0;
class index extends request {
  constructor() {
    super();
    this.get = {
      auth: false,
      path: "/",
      function: (req: any, res) => {
        console.log(req.user);
        res.send({ ok: true })
      }
    };
  }
}

export default index;