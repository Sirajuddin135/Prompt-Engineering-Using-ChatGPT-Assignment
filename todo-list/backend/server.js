const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});

const todos = [
    { id: 1, title: "Buy milk" },
    { id: 2, title: "Walk the dog" },
    { id: 3, title: "Finish homework" },
];

app.get("/todos", (req, res) => {
    res.send(todos);
});
