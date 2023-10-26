import postgres from "https://deno.land/x/postgresjs@v3.3.5/mod.js";

const db = postgres({});

    // hostname: "localhost",
    // database: "aalto_course",
    // user: "postgres",
    // password: "computer",
    // port: 5432,


export default db;