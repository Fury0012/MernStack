const mongoose = require("mongoose")
const dbName = process.env.dbName


mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
.then(() => console.log(`conntected succesfully to ${dbName} `))
.catch(err => console.log('something went wrong ', err))

