/**
 * User's create account
 */
// Imports
const User = require('../models/User');

module.exports = {
    async store(request, response) {
        const { name, email, password } = request.body;

        let user = await User.findOne({ email });

            if(!user) {
                user = await User.create({ name, email, password });
            } 

            return response.json(user);
    } 
}