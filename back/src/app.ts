import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";

const app: Application = express();
app.use(express.json());

//As rotas vão aqui
app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.use(handleErrors);
export default app;
