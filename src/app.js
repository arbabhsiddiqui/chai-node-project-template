import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./modules/auth/auth.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);

// app.use((req, res) => {
//     res.status(404).json({
//         success: false,
//         message: "Route not found",
//     });
// });

// app.use((err, req, res, next) => {
//     const statusCode = err?.statusCode || 500;
//     const message = err?.message || "Internal Server Error";
//     const payload = {
//         success: false,
//         message,
//     };

//     if (err?.errors) {
//         payload.errors = err.errors;
//     }

//     res.status(statusCode).json(payload);
// });

export default app