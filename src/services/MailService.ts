import { createTransport, Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { Email } from '../interface/Email';

export class MailService {
    private transporter: Transporter;

    constructor() {
        this.transporter = createTransport({
            host: process.env.EMAIL_HOST || "smtp.gmail.com",
            // port: process.env.EMAIL_PORT || 587,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }

    public async send(options: Email): Promise<Mail.Options> {
        await this.transporter.sendMail(options);
        return options;
    }
}