import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";

const app: Application = express();
app.use(express.json());

//As rotas vão aqui

app.use(handleErrors);
export default app;
