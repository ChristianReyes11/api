const models = require('../database/models');
const createCancion = async (req,res)=>{
    try{
        const cancion = await models.canciones.create(req.body);
        return res.status(201).json({
            cancion
        });
    }catch (error){
        return res.status(500).json({
            error:error.message
        });
    }
};

const getAllSong = async (req, res)=>{
    console.log('Obteniendo Cancion');
    try{
        const canciones = await models.canciones.findAll({
           include:[]
        });
        return res.status(200).json({canciones});
    } catch (error){
        return res.status(500).send(error.message);
    }
};
module.exports = {
    createCancion,
    getAllSong
};
