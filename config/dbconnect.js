const {default: mongoose} = require('mongoose');

const dbConnect = () => {
    try {
        const connect = mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection error");
    }
}

module.exports = dbConnect;


// --------------------- OPTION -------------------------
// mongoose.connect( --- );
// .then(() => console.log("Database connected successfully"))
// .catch ((error) => console.log("Database connection error"));