import mysql from "promise-mysql"
import { Roles }  from "./consts"

export interface User {
    id?: number
    user_name: string
    password: string
    email: string
    kisense_sn?: string
    phone_number?: string
}

class DataBase {
    connection = null;
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123321',
            port: 3306,
            database: 'database'
        });
    }

    async init() {
        await this.connection;
        await this.createUsersTable();
        await this.createRolesTable();
        await this.createRoles();
    }

    async createUser(user: User) {
        return (await this.connection).query(`
        INSERT INTO Users(user_name, password, email ${user.kisense_sn ? ',kisense_sn,' : ''} ${user.phone_number ? ',phone_number' : ''})
            VALUES("${user.user_name}", "${user.password}", "${user.email}" ${user.kisense_sn ? ',"' + user.kisense_sn + '"' : ''} ${user.phone_number ? ',"' + user.phone_number + '"' : ''});`
        )
    }

    async getAllUsers(): Promise<Array<User>> {
        return (await this.connection).query(
            `SELECT * FROM USERS`
        )
    }

    private async createUsersTable() {
        return (await this.connection).query(`
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT,
            PRIMARY KEY (id),
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL, 
            user_name VARCHAR(255) NOT NULL,
            kisense_sn VARCHAR(255),
            phone_number VARCHAR(255)
        );`)
    }

    private async createRolesTable() {
        return (await this.connection).query(`
        CREATE TABLE IF NOT EXISTS Roles (
            id INT AUTO_INCREMENT,
            PRIMARY KEY (id),
            name VARCHAR(40) NOT NULL
        );`)
    }

    private async createRoles() {
        let i = 1;
        for (const role in Roles) {
            (await this.connection).query(`
            INSERT IGNORE INTO Roles(id, name)
                VALUES(${i++},"${Roles[role]}");`)
        }
    }


}

export default DataBase;