import expressJwt from "express-jwt"
import jwt from "jsonwebtoken"

class authetication {
    secret = null;
    expressModule = null;

    init(secret) {
        this.secret = secret;
        this.expressModule = expressJwt({
            secret: secret,
            getToken: (req) => {
                const cookies = req.headers.cookie ? req.headers.cookie.split(";") : [];
                for(let i of cookies){
                    if(i.replace(/ /g,"").startsWith("token=")){
                        return i.substring(i.indexOf("=")+1);
                    }
                }
                return null;
            }
        });
    }

    errorHandler(err, req, res, next) {
        if (err.name === "UnauthorizedError") {
            res.status(err.status).send({
                status: "error",
                message: err.message
            });
            res.end();
            return;
        } else {
            throw err;
        }
    }

    generateToken(user) {
        const token = jwt.sign(user, this.secret, {
            expiresIn: "2d"
        });
        return token;
    }

    verifyToken(token) {
        const user = jwt.verify(token, this.secret);
        return user;
    }
}

export default authetication;