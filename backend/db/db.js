const mongoose = require('mongoose');  // Corrected

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('Connected to DB'))  // Use .then() for success message
        .catch(err => console.log('DB Connection Error:', err));  // Catch connection errors
}

module.exports = connectToDb;
