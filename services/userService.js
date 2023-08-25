import { successResponse, errorResponse } from "../utils/response.js";
import * as UserRepo from "../repository/user.js";
import { nanoid } from "nanoid";

const users = [];

export const addUser = async (req, res, next) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let address = req.body.address;

    await UserRepo.createData(name, email, password, address);
    const result = getUser();
    successResponse(res, "berhasil menambahkan user", result);
  } catch (error) {
    errorResponse(res, "gagal menambahkan user", 500);
  }
};

export const getUser = async (req, res, next) => {
  const [result] = await UserRepo.getData();
  successResponse(res, "success", result);
};

export const updateUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    await UserRepo.updateData(id, name, email);

    const result = await getUser();
    successResponse(res, "success", result);
  } catch (error) {
    errorResponse(res, "gagal menambahkan user", 500);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    let id = req.params.id;
    await UserRepo.deleteData(id);

    const result = await getUser();
    successResponse(res, "berhasil hapus user", result);
  } catch (error) {
    errorResponse(res, "user tidak ditemukan");
  }
};
