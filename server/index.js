import { config }from "dotenv";
import express from "express";
import morgan from "morgan";
import routes from "./routes/routes.js";
import cors from "cors"

config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//HOME ROUTE - app.use doesn't work now
app.get("/", (req, res) => {
    return res.send(`Api is working on tiger`);
});
// TOKEN API ROUTE
app.use("/api/v1", routes);

app.listen(PORT, () => {
    console.log(`App is working on http://localhost:${PORT}`);
});

