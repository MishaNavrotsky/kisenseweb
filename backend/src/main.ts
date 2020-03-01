import express from "express"
import DataBase from "./db"
import cors from "cors"
import { User } from "./db"

async function main() {
    const db = new DataBase();
    await db.init();
    const app = express();
    app.use(cors())
    app.get('/users', async (res, req) => {
        const users = await db.getAllUsers();
        let response = '';
        users.forEach((element) => {
            response += `${element.id}: ${element.user_name} ${element.password}\n`
        });
        req.end(response);
    })

    app.post('/register', express.json(), async (req, res)=>{
        try {
            const user : User = {
                user_name: req.body.login,
                password: req.body.password,
                email: req.body.email
            }
            await db.createUser(user)
            res.json({"message":"ok"})
        } catch (error) {
            res.json({"message":"error"})
        }
    })

    app.listen(1337);
}

main();