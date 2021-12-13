const models = require('../database/models');
const createjugadores = async (req,res)=>{
    try{
        const jugador = await models.jugadores.create(req.body);
        return res.status(201).json({
            jugador
        });
    }catch (error){
        return res.status(500).json({
            error:error.message
        });
    }
};

const getjugadores = async (req, res)=>{
    console.log('Obteniendo Jugadores');
    try{
        const jugadores = await models.jugadores.findAll({
           include:[]
        });
        return res.status(200).json({jugadores});
    } catch (error){
        return res.status(500).send(error.message);
    }
};
module.exports = {
    createjugadores,
    getjugadores
};
