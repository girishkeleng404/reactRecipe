import express from "express"
import cors from "cors";
import bodyParser from 'body-parser';
import env from 'dotenv';
import axios from 'axios';

const app = express();
const port = 4000;

env.config();

const allowedOrigins = [
    'http://localhost:5173',
    'https://pies-client.vercel.app/',
    'https://pies-client-a8g9byi84-girish-kelengs-projects.vercel.app/'
  ];

// app.use(cors({
//     origin:'http://localhost:5173',
//     credentials:true
// }));

app.use(cors({
    origin: function(origin, callback) {
      // Check if the origin is in the allowedOrigins list or if no origin is provided
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  }));

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/',async (req,res)=>{
    res.send('Hello World');
})
 
const API1 = process.env.API1;
const API2 = process.env.API2;
const API3 = process.env.API3;
// const API4 = process.env.API4;

const config ={
    headers:{
        "x-api-key": process.env.API_KEY
    },
}


app.post("/dishs",async (req,res)=>{
    const {dishName,cuisine,diet,type,includeIngredients,excludeIngredients} = req.body;
    try {
        const response = await axios.get(`${API1}query=${dishName}&cuisine=${cuisine}&diet=${diet}&type=${type}&includeIngredients=${includeIngredients}&excludeIngredients=${excludeIngredients}&number=50`,config);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        
    }
})

 app.post('/details/:id', async(req,res)=>{
    const {id} = req.params;

    try {
        const response = await axios.get(`${API2}${id}${API3}`,config);
        if(response.data === 0){
            res.json({message:"No data found"});
        } 
        res.json(response.data);
    } catch (error) {
        console.log(error);
        
    }
 })


 app.get('/random', async(req,res)=>{
    try{
        const response = await axios.get(`${process.env.API4}`,config);
        res.json(response.data);
    } catch(error){
        console.log(error);
    }
 })

app.listen(port, async()=>{
    console.log(`Server is running on port ${port}`);
})