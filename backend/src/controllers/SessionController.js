// Imports
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  // Create an user account
  async store(request, response) {
    const { name, email, password } = request.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({ name, email, password });
      }

      // We don't want to return the password
      user.password = undefined;

      // With a token create and login at the same time
      const accessToken = jwt.sign({ user_id: user._id }, process.env.ACCESS_TOKEN_SECRET);

      return response.json({ user, accessToken });
    } catch (err) {
      return response.status(400).json({ error: 'Registration failed' });
    }
  },

  async login(request, response) {
    // Authenticate user
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({
        error: "Veuillez saisir un email or un mot de passe"
      });
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return response.status(400).send({
        error : "Cet email n'est pas enregistré"
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return response.status(400).send({
        error: 'Mot de passe incorrect'
      });
    }

    // We don't want to return the password
    user.password = undefined;

    // sign() takes two parameters : unique user's data and the secret key
    const accessToken = jwt.sign(
      { user_id: user.id },
      process.env.ACCESS_TOKEN_SECRET
    );

    return response.json({
      user,
      accessToken,
    });
  }
}
