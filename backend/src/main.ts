import db from "./database"
import app from "./server"


console.log(__dirname)

const PORT = process.env.PORT || 5000
console.log(new Date());
db.init().then(() => {
  const server = new app()
  server.init(PORT);
});