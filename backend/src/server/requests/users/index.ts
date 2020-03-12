import express from "express"
import request from "../request"
import db from "../../../database"

class users extends request {
  constructor() {
    super();
    this.get = {
      auth: true,
      path: "/users",
      function: async (req, res) => {
        res.json(await db.getUsers()).end();
      }
    };
  }
}

export default new users();