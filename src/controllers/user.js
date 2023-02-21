import Model from '../models/model';
//import addUser from '../models/user';
//import { userPage } from '../controllers/user';
const userModel = new Model('user');
//const messageModel = new Model('messages');

export const userPage = async (req, res) => {
  try {
    const data = await userModel.select('username, userId');
    res.status(200).json({ user: data.rows });
  } catch (err) {
    res.status(200).json({ user: err.stack });
  }
};

//export const addUser = async (req, res) => {
//  const { username, userId } = req.body;
//  const columns = 'username, userId';
//  const values = `'${username}', '${userId}'`;
//  try {
//    const data = await userModel.insertWithReturn(columns, values);
//    res.status(200).json({ users: data.rows });
//  } catch (err) {
//    res.status(200).json({ users: err.stack });
//  }
//};

//export const updateUser = async (req, res) => {
//  const { username, userId } = req.body;
//  const columns = ['username', 'userId'];
//  const values = [username, userId];
//  try {
//    const data = await userModel.update(columns, values);
//    res.status(200).json({ users: data.rows });
//  } catch (err) {
//    res.status(200).json({ users: err.stack });
//  }
//}


