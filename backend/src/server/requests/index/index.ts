import express from "express"
import request from "../request"

class index extends request {
  constructor() {
    super();
    this.get = {
      auth: false,
      path: "/",
      function: (req, res) => {
        res.send({ ok: true })
      }
    };
  }
}

export default new index();