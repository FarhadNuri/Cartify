import {drizzle} from "drizzle-orm/node-postgres";
import {Pool} from "pg";
import * as schema from "./schema.db"; 
import {ENV} from "../config/db.config";

if(!ENV.DB_URL) {
    throw new Error("Database URL is not defined in environment variables");
}

const pool = new Pool({
    connectionString: ENV.DB_URL,
});
//

pool.on("connect", () => {
    console.log("Connected to the database");
});

pool.on("error", (err) => {
    console.error("Database connection error:", err);
});

export const db = drizzle({ client: pool,schema });

// 👀 What is a Connection Pool?
// A connection pool is a cache of database connections that are kept open and reused.

// 🤷‍♂️ Why use it?
// 🔴 Opening/closing connections is slow. Instead of creating a new connection for each request, we reuse existing ones.
// 🔴 Databases limit concurrent connections. A pool manages a fixed number of connections and shares them across requests.