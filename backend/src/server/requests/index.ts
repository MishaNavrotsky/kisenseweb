import login from "./login"
import index from "./index/index"
import register from "./register"
import def from "./default"
import users from "./users"
import _ from "lodash"

class requests extends Array {
    auth = null;
    express = null;
    constructor(obj) {
        super();
        this.auth = obj.auth;
        this.express = obj.express;
        this.push(new login(obj), new index(), new register(obj), new users(obj));
        this.push(new def());
    }

    init() {
        for (const request of this) {
            const disp = {
                ...request
            }
            console.log(`${request.constructor.name}: { ${disp.get ? "get: " + disp.get.path + " " : ""}${disp.post ? "post: " + disp.post.path : ""}, authGet:${disp.get?.auth}, authPost:${disp.post?.auth} }`);
            if (request.get) {
                const authMiddleware = request.get.auth ? this.auth.expressModule : (err, req, res, next)=>{next()};
                if (!_.isEmpty(request.get.middleware))
                    this.express.get(request.get.path, request.get.middleware,  authMiddleware ,request.get.function);
                else
                    this.express.get(request.get.path, authMiddleware, request.get.function);
            }
            if (request.post) {
                const authMiddleware = request.post.auth ? this.auth.expressModule : (err, req, res, next)=>{next()};
                if (!_.isEmpty(request.post.middleware))
                    this.express.post(request.post.path, request.post.middleware, authMiddleware, request.post.function);
                else
                    this.express.post(request.post.path, authMiddleware, request.post.function);
            }
        }
    }
}

export default requests;