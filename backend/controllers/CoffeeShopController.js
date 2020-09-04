// Models imports
const Coffee = require('../models/CoffeeShop');
const User = require('../models/User');

module.exports = {

    // Lists all coffee shops
    async index(request, response) {
        const { tech } = request.query;

        const coffee = await Coffee.find({ techs: tech });

        if (coffee != tech) {
            return response.status(400).json({ error: 'Pas d\'événement programmé avec cette technologie'});
        }

        return response.json(coffee);
    },

    // Creating an event in a coffee shop
    async store(request, response) {
        const { filename } = request.file;
        const { company, techs } = request.body;
        const {user_id } = request.headers.authorization;

        // User exists ?
        const user = await User.findById(user_id);

        if (!user) {
            return response.status(400).json({ error: 'User does not exists' });
        }

        const coffee = await Coffee.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim())
        })

        return response.json(coffee);

    }    
}

