require('dotenv').config();
// Imports
const User = require('../models/User');
const jwt = require('jsonwebtoken');

/**
 * User's create account
 */
module.exports = {
    async store(request, response) {
        const { name, email, password } = request.body;

        try {
            if (await User.findOne({ email })) {
                return response.status(400).send({
                    error: 'User already exists'
                });
            }

            const user = await User.create({ name, email, password });

            const accessToken = jwt.sign({ user_id: user.id }, process.env.ACCESS_TOKEN_SECRET);

            return response.json({ user, accessToken });

        } catch (err) { 
            return response.status(400).json({ error: 'Registration failed '});
            
        }  
    },      

    async login(request, response) {
        // Authenticate user
        const { email, password } = request.body;

        if (!email) {
            return response.status(400).json({
                error: "Veuillez saisir un email"
            });
        }
        if (!password) {
            return response.status(400).json({
                error: "Veuillez saisir un mot de passe"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            response.status(400).send({
                error : "Cet email n'est pas enregistré"
            });
        }

        if (password !== user.password) {
            return response.status(400).send({ error: 'Mot de passe incorrect' });
        }

        const accessToken = jwt.sign({ user_id: user.id }, process.env.ACCESS_TOKEN_SECRET);

        return response.json({ user, accessToken });   
    }
}