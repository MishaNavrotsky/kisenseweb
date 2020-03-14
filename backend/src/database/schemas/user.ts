import mongoose from "mongoose"
import auth from "../../authentication"
import { Roles } from "../../const"

const userScheme = new mongoose.Schema({
  //TODO validator?
  name: {
    required: true,
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[a-z0-9_]{3,16}$/.test(v)
      },
      message: "name is not valid"
    }
  },
  //TODO validator?
  password: {
    required: true,
    type: String,
    validate: {
      validator: function (v) {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/.test(v)
      },
      message: "password is not valid"
    }
  },
  //TODO validator?
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(v)
      },
      message: "email is not valid"
    }
  },
  //TODO validator?
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[0-9]{10,16}$/.test(v)
      },
      message: "phone number is not valid"
    }
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  lastActiveDate: {
    type: Date
  },
  role: {
    type: String,
    default: Roles.USER
  }
})

export interface IUser extends mongoose.Document {
  role: string
  name: string,
  password: string,
  email: string,
  phone: string,
  createDate: Date,
  lastActiveDate: Date
}

userScheme.pre("save", async function (next) {
  const user = this as any;
  user.password = await auth.cryptPassword(user.password);
  return next()
})

userScheme.pre('findOne', async function (next) {
  const user = (this as any)._conditions as IUser;
  if (user.password && user.name) {
    user.password = await auth.cryptPassword(user.password);
  }
  return next();
})

const User = mongoose.model<IUser>("User", userScheme);

export default User;

