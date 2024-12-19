const mongoose = require('mongoose');

const MONG_URI = 'mongodb://127.0.0.1:27017/BooksData'; // Use 127.0.0.1 instead of localhost

mongoose.connect(MONG_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const db = mongoose.connection;

module.exports = db;
