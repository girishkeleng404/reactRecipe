import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;


app.use(cors());


app.get('/',async (req,res)=>{
    res.send('Hello World');
})




app.listen(port, async(req,res)=>{
    console.log(`Server is running on port ${port}`);
})