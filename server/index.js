import express from "express"
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
const port = 4000;


app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',async (req,res)=>{
    res.send('Hello World');
})
 




app.listen(port, async()=>{
    console.log(`Server is running on port ${port}`);
})