const {Router}= require('express');
const controllers = require('../controllers');

const router= Router();

router.get('/', (req, res)=> res.send('Api de VideJuegos'));
router.post('/juegos', controllers.createJuego);
router.get('/juegos', controllers.getJuegos);
module.exports = router;
