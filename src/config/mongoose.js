require("dotenv").config();

module.exports = function (mongoose) {

    const url = process.env.MONGO_KEY;

    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    mongoose.connect(url, connectionParams)
        .then(() => {
            console.log("config/mongoose.js: Successfully connected to MongoDB Atlas server");
        })
        .catch(err => {
            console.log("config/mongoose.js: Failed to connect to mongoDB Atlas server");
            console.log("config/mongoose.js-err: " + err);
        })
}