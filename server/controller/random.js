
const axios = require('axios');

const random = async (req, res) => {
    const API4 = process.env.API4;
    const config = {
        headers: {
            "x-api-key": process.env.API_KEY
        },
    };

    try {
        const response = await axios.get(API4, config);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = random;
