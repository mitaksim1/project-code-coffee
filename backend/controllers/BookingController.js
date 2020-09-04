const Booking = require('../models/Booking');

module.exports = {
    async store(request, response) {
        const { user_id } = request.headers;

        const { coffee_id } = request.params;

        const { date } = request.body;

        const booking = await Booking.create({
            user: user_id,
            coffee: coffee_id,
            date,
        });

        await booking.populate('coffee').populate('user').execPopulate();

        return response.json(booking);
    }
};