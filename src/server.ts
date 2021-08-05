import express, { Request, Response } from "express"
import { router } from "./routes";

import "reflect-metadata";

import "./database"

const app = express();
const port = 3000;

app.use(router);

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});