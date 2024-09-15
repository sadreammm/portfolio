import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, ()=> console.log("Server running"));

const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS
        }
});

contactEmail.verify((error)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("ready to send");
    }
});

router.post("/contact", (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    if (!firstName || !lastName || !email || !message || !phone) {
        return res.json({code: 400, status: "All fields are required"});
    }
    const name = firstName + " " + lastName;
    const mailOptions = {
        from: email, 
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html : `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`
    };

    contactEmail.sendMail(mailOptions, (error) => {
        if (error) {
            return res.json(error);
        } else{
            res.json({code: 200, status: "Message Sent"});
        }
        
    });
});
