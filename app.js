import express from 'express';
import { router } from "./src/routes/RecipeRoute.js";

const app = express();
const port = 3002;

app.use(express.json());
app.use(router)


app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});
