import express from "express";

import { getAllNodes } from "./db.js";

const port = process.env.PORT || 6969;
const app = express();

app.get('/', (_req, res) => {
    res.send('Hello World!');
});



app.listen(port, () => console.log(`Server listening on ${port}`));