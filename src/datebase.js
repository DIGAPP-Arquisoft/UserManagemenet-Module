import mongoose from 'mongoose'

// mongoose.connect("mongodb+srv://jatoroe:tTZE19uT7JyX3gzf@usermanagement.uwk4w.mongodb.net/?retryWrites=true&w=majority/Users",{
// //mongoose.connect("mongodb://digapp_auth_db:27017/Users",{
//     writeConcern: { w: 1, wtimeout: 0, provenance: 'clientSupplied' }
// })
// .then(db => console.log('DB is Connected'))
// .catch(error => console.log('MongooseError', error))

//mongoose.connect("mongodb+srv://jatoroe:tTZE19uT7JyX3gzf@usermanagement.uwk4w.mongodb.net/?retryWrites=true&w=majority/Users",{
mongoose.connect("mongodb://192.168.0.16:27017/Users",{
    writeConcern: { w: 1, wtimeout: 0, provenance: 'clientSupplied' }
})
.then(db => console.log('DB is Connected'))
.catch(error => console.log('MongooseError', error))