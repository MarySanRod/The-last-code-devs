const mongoose = require('mongoose');
//const URL = 'mongodb://localhost:27017/TheLastCodeDevs';
// const URL = 'mongodb+srv://admin:admin123@thelastcodedevs.5dt7z.mongodb.net/TheLastCodeDevs?retryWrites=true&w=majority';
const URL = process.env.DB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db=>console.log("MongoDB database connection established successfully"))
    .catch(error=>console.log(error))

module.exports = mongoose;