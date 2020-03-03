import express from "express"
import request from "../request"

class users extends request {
    constructor({db}) {
        super();
        this.get = {
            auth: true,
            path: "/users",
            function: async (req : any, res) => {
                console.log(req.user)
                res.json(await db.getUsers()).end();
            }
        };
    }
}

export default users;