import mongoose from 'mongoose'



mongoose.connect("mongodb://digapp_auth_db:27017/Users",{
})
.then(db => console.log('DB is Connected'))
.catch(error => console.log('MongooseError', error))