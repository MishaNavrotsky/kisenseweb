import express from "express"
import request from "../request"

let i = 0;
class index extends request {
  constructor() {
    super();
    this.get = {
      auth: false,
      path: "/",
      function: (req, res) => {
        setTimeout(() => {
          res.json({ data: req.headers.cookie });
          res.end();
        }, 5000);
      }
    };
  }
}

export default index;