export const URL_API = "http://localhost:5000";

export async function getUsers() {
  const response = await fetch(URL_API + "/users", {
    credentials: "include"
  });
  return await response.json();
}

export async function createUser(body) {
  const response = await fetch(URL_API + "/register", {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: body
  });
  return await response.json();
}

export async function login(body) {
  const response = await fetch(URL_API + "/login", {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: body
  });
  return await response.json();
}

export async function getUserByToken() {
  const response = await fetch(URL_API + "/user", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  return await response.json();
}
