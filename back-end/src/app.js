import express from "express";
import usersRoutes from "./routes/users.routes";

const app = express();

app.use(usersRoutes);

export default app;
