const User = require('../../model/User');

const getUser = async (req, res) => {
    const { username } = req.params;

    if (!username) {
        return res.status(400).json({ message: "Username param required." })
    }

    try {
        const user = await User.findOne({
            username: username
        }).select('-password -refreshToken').exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({ message: 'Failed to fetch user.' });
    }
};

module.exports = { getUser };