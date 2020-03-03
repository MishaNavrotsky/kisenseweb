import express from 'express'
import requests from './requests'
import wsrequests from './wsrequests'
import cors from "cors"

import _ from "lodash"

class server {
    db = null;
    auth = null;
    app = null;
    requests = null;
    wsrequests = null;
    constructor(db = {}, auth = {}) {
        this.db = db;
        this.auth = auth;
        this.app = express();
        this.app
            .use(cors({
                origin: (origin, cb) => {
                    return cb(null, true);
                },
                credentials: true
            }));
        this.requests = new requests({
            db: this.db,
            auth: this.auth
        });
        this.wsrequests = new wsrequests({
            db: this.db
        });
    }



    init(port) {
        console.log("Server init!............");
        //check all requests for using auth 
        console.log("Server auth init........")
        let notAuthArr = [];
        for (const request of this.requests) {
            notAuthArr.push(request.notAuthPathes);
        }
        notAuthArr = _.flattenDeep(notAuthArr);
        this.app.use(this.auth.expressModule.unless({
            path: notAuthArr
        }));
        //auth error handler
        this.app.use(this.auth.errorHandler);
        //init ws routes
        console.log("WS init...........");
        this.wsrequests.init(this.app, "/websocket");

        //init express routes
        console.log("Requests init.........");
        this.requests.init(this.app);
        this.app.listen(port);
    }
}

export default server;