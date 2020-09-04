// Models imports
const Coffee = require('../models/CoffeeShop');
const User = require('../models/User');

module.exports = {

    async index(request, response) {
        return response.json({ ok: true });
    },

    async store(request, response) {
        console.log(request.body);
        console.log(request.file);

    }    
}

