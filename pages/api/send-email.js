import { SMTPClient } from 'emailjs';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message, createDate } = req.body;

        const client = new SMTPClient({
            user: process.env.gmail_username,
            password: process.env.gmail_password,
            host: 'smtp.gmail.com',
            ssl: true
        });

        try {
            let content = 'Name: ' + name;
            content += '\nEmail: ' + email;
            content += '\nMessage: ' + message;
            const result = await client.sendAsync({
                text: content,
                from: process.env.gmail_username,
                to: process.env.gmail_username,
                subject: 'mePortfolio Contact',
            });
            console.log("result: ", result);
        }
        catch (e) {
            res.status(400).end(JSON.stringify({ message: "Cant send email" }))
            console.log("error: ", e);
            return;
        }

        res.status(200).end(JSON.stringify({ message: 'Email sent!' }))
    }
}

export default handler;