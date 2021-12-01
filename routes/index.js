const {Router}= require('express');
const controllers = require('../controllers');

const router= Router();

router.get('/', (req, res)=> res.send('Buenas tardes XD'));
router.post('/canciones', controllers.createCancion);
router.get('/canciones', controllers.getAllSong);
module.exports = router;
