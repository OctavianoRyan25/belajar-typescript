import express from "express";
import userRoutes from "./router/user.router";
import postRoutes from "./router/post.router";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("app/user", userRoutes)
app.use("posts", postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

