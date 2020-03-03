import login from "./login"
import index from "./index/index"
import register from "./register"
import def from "./default"
import users from "./users"
import _ from "lodash"

class requests extends Array {
    constructor(obj) {
        super();
        this.push(new login(obj), new index(), new register(obj), new users(obj));
        this.push(new def());
    }

    init(express) {
        for (const request of this) {
            const disp = {
                ...request
            }
            console.log(`${request.constructor.name}: { ${disp.get ? "get: " + disp.get.path + " " : ""}${disp.post ? "post: " + disp.post.path : ""} }`);
            if (request.get) {
                if (!_.isEmpty(request.get.middleware) || _.isFunction(request.get.middleware))
                    express.get(request.get.path, request.get.middleware, request.get.function);
                else
                    express.get(request.get.path, request.get.function);
            }
            if (request.post) {
                if (!_.isEmpty(request.post.middleware) || _.isFunction(request.post.middleware))
                    express.post(request.post.path, request.post.middleware, request.post.function);
                else
                    express.post(request.post.path, request.post.function);
            }
        }
    }
}

export default requests;