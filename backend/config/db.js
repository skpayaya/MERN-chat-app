const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error:", error);
        process.exit();
    }
};

module.exports = connectdb;
