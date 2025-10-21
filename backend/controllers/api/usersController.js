const User = require('../../model/User');

const getAllUsers = async (req, res) => {
    const users = await User.find().exec();
    res.status(200).json(users);
};

module.exports = { getAllUsers };