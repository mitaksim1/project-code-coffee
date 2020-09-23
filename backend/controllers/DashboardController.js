// Imports
const Coffee = require('../models/CoffeeEvent');

module.exports = {
    // Show coffee by its user_id
    async show(request, response) {
        const { user_id } = request.headers;

        const coffees = await Coffee.find({ user: user_id });

        const accessToken = jwt.sign({ user_id: user.id }, process.env.ACCESS_TOKEN_SECRET);

        return response.json(coffees);
    },
}