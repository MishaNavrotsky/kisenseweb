declare namespace Express {
  export interface Request {
    user?: import("../src/database/schemas/user").IUser
    tokenUser?: object
  }
} 