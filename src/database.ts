import { createPool } from "mysql2/promise";

export async function connect() {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'jose002134@',
        database: 'ice_cream_app',
        connectionLimit: 10
    });
    
    return connection;
}