import dbPool from "../utils/db.js";

export const getData = () => {
  const sql = "SELECT * FROM tb_user";

  return dbPool.query(sql);
};

export const createData = (name, email, password, addres) => {
  let createdAt = new Date();
  const sql =
    "INSERT INTO tb_user (name, email, password, addres, created_at) VALUE(?, ?, ?, ?, ?)";
  const value = [name, email, password, addres, createdAt];
  const result = dbPool.query(sql, value);

  return result;
};

export const updateData = (user_id, name, email) => {
  const sql = `UPDATE tb_user SET name = "${name}", email = "${email}" WHERE user_id = ${user_id}`;

  return dbPool.query(sql);
};

export const deleteData = (user_id) => {
  const sql = "DELETE FROM tb_user WHERE user_id = ?";
  const result = dbPool.query(sql, [user_id]);

  return result;
};

export const getDataByEmail = (email) => {
  const sql = "SELECT * FROM tb_user WHERE email = ?";

  return dbPool.query(sql, [email]);
};

export const getDataById = (user_id) => {
  const sql = "SELECT * FROM tb_user WHERE user_id = ?";

  return dbPool.query(sql, [user_id]);
};
