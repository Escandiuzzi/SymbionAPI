import express, { Request, Response } from "express"
import { NextFunction } from "connect";
import { router } from "./routes";

import "reflect-metadata";

import cors from "cors"

import { validateDotEnv } from "./helpers/validateDotEnv";


import "./database"


//require('dotenv').config({path: __dirname + '/.env'})
require('dotenv').config('../.env')

validateDotEnv();

const app = express();

app.use(router);

app.use(cors());

app.use(express.json());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
})

app.listen(process.env['SERVER_PORT'] || 5000, () => {
    console.log(`Example app listening at http://localhost:${process.env['SERVER_PORT']}`)
});