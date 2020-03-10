import authentication from "./authentication"
import database from "./database"
import server from "./server"
import fs from "fs"

console.log(__dirname)

const PORT = process.env.PORT || 5000
const MONGODBSTRING = "mongodb://juju577:noV123ch@ds233198.mlab.com:33198/heroku_83f1b22l"
const config = JSON.parse(fs.readFileSync("config.json").toString())
console.log(new Date());
const db = new database(MONGODBSTRING);
db.init().then(() => {
  const auth = new authentication();
  auth.init(config.secret);
  const ser = new server(db, auth);
  ser.init(PORT);
});