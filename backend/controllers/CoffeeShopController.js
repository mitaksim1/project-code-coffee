// Models imports
const Coffee = require('../models/CoffeeShop');
const User = require('../models/User');

module.exports = {

    async index(request, response) {
        return response.json({ ok: true });
    },

    async store(request, response) {
        const { filename } = request.file;
        const { company, techs } = request.body;
        const {user_id } = request.headers.authorization;

        const coffee = await Coffee.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim())
        })

        return response.json(coffee);

    }    
}

