const { default: axios } = require("axios");

const dishs = async (req, res) => {

    const API1 = process.env.API1;
    const config = {
        headers: {
            "x-api-key": process.env.API_KEY
        },
    };


    const { dishName, cuisine, diet, type, includeIngredients, excludeIngredients } = req.body;
    try {
        const response = await axios.get(`${API1}query=${dishName}&cuisine=${cuisine}&diet=${diet}&type=${type}&includeIngredients=${includeIngredients}&excludeIngredients=${excludeIngredients}&number=50`, config);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }


}


module.exports = dishs;