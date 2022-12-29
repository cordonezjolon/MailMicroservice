import { Router } from "express";
import {mailController} from '../controllers/mailController'

const routermail = Router();
const mail:mailController= new mailController;
  routermail.post("/sendmail", (request, response) => {
  return mail.sendmail(request, response);
  });

export { routermail };