import express from "express"
import request from "../request"
import database from "../../../database"

class users extends request {
  constructor({ db }) {
    super();
    this.get = {
      auth: true,
      path: "/users",
      function: async (req: any, res) => {
        res.json(await (db as database).getUsers()).end();
      }
    };
  }
}

export default users;