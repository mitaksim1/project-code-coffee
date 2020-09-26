/**
 * This controller allows an user logged at the application, booking in a event scheduled at the application by an another user
 */
const Booking = require('../models/Booking');
const User = require('../models/User');

module.exports = {
    // Participe à un événement
    async store(request, response) {
        const { user_id } = request.headers;
        const { coffee_id } = request.params;

        // User exists ?
        const user = await User.findById(user_id);

        if (!user) {
            return response.json({ message: 'Vous devez être inscrit pour valider votre participation' });
        }

        const booking = await Booking.create({
            user: user_id,
            coffee: coffee_id,
        });

        await booking.populate('coffee').populate('user').execPopulate();

        return response.json(booking);
    },
}
