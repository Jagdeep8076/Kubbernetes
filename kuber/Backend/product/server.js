import express from "express";
import morgan from "morgan";
import axios from "axios";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/product", async (req, res) => {
    try {
        const response = await axios.get("http://main-server-service/");
        res.send(response.data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Error connecting to main-server-service");
    }
});

app.listen(8080, "0.0.0.0", () => {
    console.log("Server is running on port 8080");
});