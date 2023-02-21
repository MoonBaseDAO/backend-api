import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import { Authsignal } from "@authsignal/node";

export const authsignal = new Authsignal({ secret: process.env.AUTHSIGNAL_SECRET });

//const authsignal = new Authsignal({ secret: "pzvtgQHw30B40TqawDALrx4gLR9lTLGpmFABl5BXxXnzDF3RoKmclQ==", apiBaseUrl: "https://signal.authsignal.com/v1" });
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

//const { isEnrolled } = await authsignal.getUser({ userId: user.id });

//if (isEnrolled) {
  // The user has MFA enabled and can be challenged
//} else {
  // The user does not have MFA enabled
//}

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack });
});

export default app;
