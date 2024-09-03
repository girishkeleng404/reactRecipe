const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const env = require('dotenv');
const axios = require('axios');
const randomRoute = require('./routes/randomRoute.js');

const app = express();
const port = process.env.PORT || 4000;
env.config();

const allowedOrigin_1 = process.env.ALLOW_ORIGIN_1;
const allowedOrigin_2 = process.env.ALLOW_ORIGIN_2;

const allowedOrigins = [
    allowedOrigin_1, // Local development
    allowedOrigin_2 // Production
 
];

app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.send('Hello World');
});

const API2 = process.env.API2;
const API3 = process.env.API3;

const config = {
    headers: {
        "x-api-key": process.env.API_KEY
    },
};


app.post('/details/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(`${API2}${id}${API3}`, config);
        if (response.data === 0) {
            res.json({ message: "No data found" });
        } else {
            res.json(response.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.use(randomRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
