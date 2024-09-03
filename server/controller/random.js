const random = async (req, res) => {
    try {
        const response = await axios.get(`${API4}`, config);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

 export default random;