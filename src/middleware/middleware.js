import axios from 'axios';
//import { logger } from '../utils/logger';

export const modifyMessage = (req, res, next) => {
  req.body.message = `${req.body.message}`;
  next();
};

//export const modifyUser = (req, res, next) => {
//  req.body.user = `${req.body.user}`;
//  next();
//};

export const performAsyncAction = async (req, res, next) => {
  try {
    await axios.get('https://picsum.photos/id/0/info');
    next();
  } catch (err) {
    next(err);
  }
};
