import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import userRoutes from "./routers/users.routes";
import loginRoutes from "./routers/login.routes";
import contactRoutes from "./routers/contacts.routes";
import cors from "cors";

const app: Application = express();
app.use(express.json());
app.use(cors());

//As rotas vão aqui
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/users/contacts", contactRoutes);

app.use(handleErrors);
export default app;
