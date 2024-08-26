import { Router, Request, Response } from 'express';
import { MailService } from '../services/MailService';
import Mail from 'nodemailer/lib/mailer';
import { E_BAD_REQUEST, errorMessage } from '../helpers/errors';
import { Email } from '../interface/Email';

const router = Router();
router.post('/send', async (req: Request, res: Response) => {
    try {
        const { to, subject, text, from, name, html } = req.body as Email;
        const mailOptions = {
            to,
            from,
            name,
            subject,
            text,
            html
        };

        if (!to || !from || !subject || !name) {
            throw new Error(E_BAD_REQUEST);
        }

        const mailService = new MailService();
        const result = await mailService.send(mailOptions);
        res.status(200).json({
            message: 'success',
            data: result
        });
    } catch (error) {
        const statusCode = E_BAD_REQUEST ? 400 : 500;
        const message = errorMessage(error);

        res.status(statusCode).send({
            error: message
        });
    }

});

export default router;