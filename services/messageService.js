import {sql}  from "../database/database.js";


const findAll = async () => {
  const result = await sql`SELECT * FROM messages order by id DESC LIMIT 5`;
  return result;
};

const create = async (sender, message) => {
  await sql`INSERT INTO messages (sender, message)
    VALUES (${ sender }, ${ message })`;
};
export{findAll,create};
