require('dotenv').config();

const server = require('./server');
const PORT = process.env.PORT || 8102;
server.listen(PORT, ()=> console.log('El servidor esta corriendo en el LOCALHOST: 8102'));