export async function getUsers(){
    const response = await fetch("http://localhost:5000/users", {
        credentials: 'include'
    });
    return await response.text();
}

export async function createUser(body){
    const response = await fetch("http://localhost:5000/register", {
        method: 'POST',
        credentials: 'include',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: body
    });
    return await response.json();
}

export async function login(body){
    const response = await fetch("http://localhost:5000/login", {
        method: 'POST',
        credentials: 'include',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: body
    });
    return await response.json();
}