// Imports
const Coffee = require('../models/CoffeeShop');

module.exports = {
    async show(request, response) {
        const { user_id } = request.headers;

        const coffees = await Coffee.find({ user: user_id });

        return response.json(coffees);
    }
}