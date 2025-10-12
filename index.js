import { config } from 'dotenv';
config({ path: "./config.env" })   // <-- must be first

import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors';
import { connection } from "./database/dbconnect.js"
import { errorMiddleware } from './middlewares/error.js';
import userRouter from './routes/userRouter.js';
import { removeUnverifiedAccounts } from './automation/removeUnverifiedaccounts.js';


export const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}))


// middlewares 

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/user", userRouter)


// automation 
removeUnverifiedAccounts()

// database connection
connection()


// error handling middleware 
app.use(errorMiddleware)


// ✅ Vercel needs the exported handler, not app.listen()
export default app;
