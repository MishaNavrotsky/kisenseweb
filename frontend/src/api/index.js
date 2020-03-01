export async function getUsers(){
    const response = await fetch("http://localhost:1337/users");
    return await response.text();
}

export async function createUser(body){
    const response = await fetch("http://localhost:1337/register", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: body
    });
    return await response.json();
}