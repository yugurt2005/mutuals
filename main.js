import express from "express";
import { addNode, addFriend, removeFriend, addInterest, removeInterest } from "./routes";

const port = process.env.PORT || 6969;
const app = express();

app.get('/', (_req, res) => {
    res.send('Hello World!');
});

app.post("/api/addNode", addNode);
app.post("/api/addFriend", addFriend);
app.post("/api/removeFriend", removeFriend);
app.post("/api/addInterest", addInterest);
app.post("/api/removeInterest", removeInterest);
app.listen(port, () => console.log(`Server listening on ${port}`));