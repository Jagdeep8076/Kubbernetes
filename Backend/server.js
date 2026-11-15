import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
    let Sum = 0;

    for (let i = 0; i < 1000000000; i++) {
        Sum += 1;
    }

    res.send(`Hello World! Sum is ${Sum}`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});