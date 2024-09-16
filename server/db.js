//https://stackoverflow.com/questions/77549800/my-error-usenewurlparser-has-no-effect-since-node-js-driver-version-4-0-0-and-w

const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};