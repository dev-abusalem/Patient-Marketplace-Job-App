import PassLessTemp from '@/components/EmailTemplates/PassLessTemp';
import nodemailer from 'nodemailer';
import ReactDOMServer from 'react-dom/server';

const email = process.env.USER_MAIL;
const pass = process.env.USER_PASS;
const PassLessTem = PassLessTemp;

export default async function handler(req, res) {
  
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: email,
          pass: pass,
        },
      });

      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: 'Login to your updoc Patient Portal',
        html: PassLessTem

      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  
}