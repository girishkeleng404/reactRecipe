import axios from 'axios';

const random = async (req, res) => {
    const API4 = process.env.API4;

    try {
        const response = await axios.get(API4, config);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default random;
