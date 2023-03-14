const mongoose = require('mongoose')

mongoose.connect('mongodb://digapp_usermanagment_db/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa a la base de datos');
}).catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
});

module.exports = mongoose.connection;