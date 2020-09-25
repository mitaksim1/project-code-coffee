/**
 * This controller allows an user logged in the application to create an event at a Coffee Shop.
 */

// Models imports
const Coffee = require('../models/CoffeeEvent');
const User = require('../models/User');

module.exports = {

    // Lists all coffee shops by technologies
    async index(request, response) {
        const { tech } = request.query;

        const coffee = await Coffee.find({ techs: tech });

        response.json({ coffee });   
              
    },

    // Creating an event in a coffee shop
    async store(request, response) {
        const { filename } = request.file;
        const { date, company, techs } = request.body;
        const { user_id } = request.headers;

        console.log(request.file);

        // User exists ?
        const user = await User.findById(user_id);

        if (!user) {
            return response.status(400).json({ error: 'Vous devez être inscrit pour créer un événement' });
        }

        const coffee = await Coffee.create({
            user: user_id,
            thumbnail: filename,
            company,
            date,
            techs: techs.split(',').map(tech => tech.trim())
        });

        return response.json({coffee});
    },
}


