import { Request, Response } from "express";
import Mail from "nodemailer/lib/mailer";
import nodemailer from "nodemailer";
import { IMessage } from "../interfaces/IMessage";
import 'dotenv/config';


export class mailController  {
    
    private transporter: Mail;
    constructor() {

        this.transporter = nodemailer.createTransport({
          host: process.env.HOST_MAIL ,//|| 'host',
          port: Number(process.env.PORT_MAIL) ,//||  587 ,
          secure:  false,
          //requireTLS: false,
          debug: Boolean(process.env.DEBUGG) ,//|| true,
          auth: {
            user: process.env.USR_MAIL ,//|| 'Domain\\user@mail',
            pass: process.env.PASSWORD_MAIL ,//|| 'Passw0rd',
          },
          logger: true,
          //tls: {cipher:'SSLv3'},
        }    
          );
    }

    //Envio de correos electronicos
    async sendmail(request: Request, response: Response): Promise<Response> {
      const message:IMessage = request.body;
      try {
        console.log(message);
        const info = await this.transporter.sendMail({
            from: message.from.email,
            to: message.to.email,
            subject: message.subject,
            text: "Texto text",
            html: message.body,
            headers: { 'x-myheader': 'test header' }
         });
         console.log("Message sent: %s", info.response);
         return response.status(201).send('Correo enviado');
      } catch (e) {
        return response.status(400).json({
          message:  "Unexpected error.",
        });
      }
    };
    //Fin envio de correo
}
