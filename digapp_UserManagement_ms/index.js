const express = require('express');
const User = require('./models/user')
const db = require('../digapp_Usermanagement_bd/database')

const app = express();
const port = 3000;

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.json(users);
    }).catch((error) => {
        console.error('Error al buscar usuarios:', error);
        res.status(500).send('Error interno del servidor');
    });
});

app.post('/users', (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then(() => {
      res.send('Usuario creado exitosamente');
    }).catch((error) => {
      console.error('Error al crear usuario:', error);
      res.status(500).send('Error interno del servidor');
    });
});

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
});