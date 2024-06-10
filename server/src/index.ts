import express, {Express} from "express"
const app: Express = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from './db/connect';
import cors from 'cors'
import bodyParser from 'body-parser'
import hotelRoutes from "./routes/hotelRoutes"

app.use(cors({
    origin: "*",
    credentials: true,
}))
app.use(express.json());
// app.use(cors());
app.use(bodyParser.json());

app.use("/hotels", hotelRoutes);





const PORT = process.env.SERVER_PORT || 5001;

const start = async ()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
        console.log("Server is running at port", PORT);
        })
    } catch (err) {
        console.log(err);
    }
}
start();