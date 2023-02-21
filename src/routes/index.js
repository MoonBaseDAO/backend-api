import express from 'express';
import { indexPage, messagesPage, addMessage } from '../controllers';
import { modifyMessage, performAsyncAction } from '../middleware';
import { userPage } from '../controllers/user';
//import { addUser } from '../models/user';

const indexRouter = express.Router();
indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
indexRouter.get('/user', userPage);
indexRouter.post('/user', modifyMessage, performAsyncAction, addMessage);



export default indexRouter;