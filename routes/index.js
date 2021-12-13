const {Router}= require('express');
const controllers = require('../controllers');

const router= Router();

router.get('/', (req, res)=> res.send('Api de FC Barcelona'));
router.post('/jugadores', controllers.createjugadores);
router.get('/jugadores', controllers.getjugadores);
module.exports = router;
