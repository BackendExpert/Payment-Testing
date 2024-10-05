const mongoose = require('mongoose')

const ConnectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected!");
    }
    catch(err) {
        console.log("MongoDB Connection Faild...", err)
        process.exit(1)
    }
}

module.exports = ConnectToDB;