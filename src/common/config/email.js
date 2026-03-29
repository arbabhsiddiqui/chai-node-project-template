import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendMail = async (to, subject, html) => {
    await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL || "no-reply@example.com",
        to,
        subject,
        html,
    });
};

const sendVerificationEmail = async (to, token) => {
    const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`;
    const verificationUrl = `${baseUrl}/api/auth/verify-email/${token}`;
    const html = `
        <p>Please verify your email by clicking the link below:</p>
        <p><a href="${verificationUrl}">${verificationUrl}</a></p>
    `;

    await sendMail(to, "Verify your email", html);
};

export { sendMail, sendVerificationEmail };
