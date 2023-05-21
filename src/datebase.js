import mongoose from 'mongoose'



mongoose.connect("mongodb+srv://jatoroe:tTZE19uT7JyX3gzf@usermanagement.uwk4w.mongodb.net/?retryWrites=true&w=majority/Users",{
    writeConcern: { w: 1, wtimeout: 0, provenance: 'clientSupplied' }
})
.then(db => console.log('DB is Connected'))
.catch(error => console.log('MongooseError', error))