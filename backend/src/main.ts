import authentication from "./authentication"
import database from "./database"
import server from "./server"
import fs from "fs"

type config = {
  dbConnectionString: string,
  secret: string
}
console.log(__dirname)

const config: config = JSON.parse(fs.readFileSync("config.json").toString())

const PORT = process.env.PORT || 5000
const MONGODBSTRING = config.dbConnectionString;//"mongodb://juju577:noV123ch@ds233198.mlab.com:33198/heroku_83f1b22l"
console.log(new Date());
const db = new database(MONGODBSTRING);
db.init().then(() => {
  const auth = new authentication();
  auth.init(config.secret);
  const ser = new server(db, auth);
  ser.init(PORT);
});