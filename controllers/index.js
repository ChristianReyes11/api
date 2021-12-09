const models = require('../database/models');
const createJuego = async (req,res)=>{
    try{
        const juego = await models.juegos.create(req.body);
        return res.status(201).json({
            juego
        });
    }catch (error){
        return res.status(500).json({
            error:error.message
        });
    }
};

const getJuegos = async (req, res)=>{
    console.log('Obteniendo Jueguito');
    try{
        const juegos = await models.juegos.findAll({
           include:[]
        });
        return res.status(200).json({juegos});
    } catch (error){
        return res.status(500).send(error.message);
    }
};
module.exports = {
    createJuego,
    getJuegos
};
