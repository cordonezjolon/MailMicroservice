import { Router } from "express";
import { routermail } from "../routes/mailroutes";

const router = Router();

router.use('/mail',routermail);

// const mail:mailController= new mailController;
//   router.post("/sendmail", (request, response) => {
//   return mail.sendmail(request, response);
//   });

export { router };