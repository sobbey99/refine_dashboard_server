import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit: "50mb"}));

app.get("/", (req,res) => {
    res.send({message: "Hello Server!"})
})

const startServer = async () => {
    try {
        //connect to the database...
    } catch (error) {
        console.log(error)
    }
}