const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/TheLastCodeDevs';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db=>console.log("MongoDB database connection established successfully"))
    .catch(error=>console.log(error))

module.exports = mongoose;