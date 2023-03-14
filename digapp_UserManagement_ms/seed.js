const User = require('./models/user');
const db = require('../digapp_Usermanagement_bd/database');

const users = [
  {
    id: 1,
    name: 'John Doe',
    nickname: 'johndoe',
    email: 'johndoe@example.com',
    password: 123456,
    age: 30
  },
  {
    id: 2,
    name: 'Jane Doe',
    nickname: 'janedoe',
    email: 'janedoe@example.com',
    password: 654321,
    age: 25
  }
];

db.once('open', () => {
  User.insertMany(users).then(() => {
    console.log('Datos iniciales agregados exitosamente');
    process.exit(0);
  }).catch((error) => {
    console.error('Error al agregar datos iniciales:', error);
    process.exit(1);
  });
});