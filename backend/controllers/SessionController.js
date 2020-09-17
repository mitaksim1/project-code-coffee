// Imports
const User = require('../models/User');
// const jwt = require('jsonwebtoken');

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
            return response.json(user);

        } catch (err) {
            if (!name || !email || !password) {
                return response.status(400).json({ error: 'Registration failed '});
            }; 
        }  
    }      
/*
    async login(request, response) {
        // Authenticate user
        const { email, password } = request.body;

        const user = await User.findOne({ email, password });

        if (!email || !password) {
            response.status(400).send({
                error : 
            })
        }

        
    }*/
}