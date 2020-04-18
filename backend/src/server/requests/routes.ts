import login from "./login"
import index from "./index/index"
import register from "./register"
import users from "./users"
import applications from "./applications"
import recepies from "./recepies"
import games from "./games"
import getUserByToken from "./getUserByToken"

export function initRoutes(requests) {
  login.init(requests)
  index.init(requests)
  register.init(requests)
  users.init(requests)
  applications.init(requests)
  recepies.init(requests)
  games.init(requests)
  getUserByToken.init(requests)
}