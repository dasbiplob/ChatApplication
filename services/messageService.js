import db from "../database/database.js";


const findAll = async () => {
  const result = await db`SELECT * FROM messages order by id DESC LIMIT 5`;
  return result;
};

const create = async (sender, message) => {
  await db`INSERT INTO messages (sender, message)
    VALUES (${ sender }, ${ message })`;
};
export{findAll,create};