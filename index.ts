import express from "express";
import userRoutes from "./src/router/user.router";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/app/user", userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

