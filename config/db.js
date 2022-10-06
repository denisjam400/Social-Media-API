const mongoose = require("mongoose")

module.exports.connect = (URI) => {
    mongoose.connect(URI)
    .then('Database Connected')
    .catch((e) => {console.log(`Could not Connect Because of ${e.message}`)})
}
