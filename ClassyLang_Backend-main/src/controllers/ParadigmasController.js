const Paradigmas = require('../models/Paradigmas');


module.exports = {
    async index(req,res){
        const paradigmas = await Paradigmas.findAll();
       
        return res.json(paradigmas);
    },
    async store(req,res){
        const {nome,linguagens,descricao} = req.body;

        const paradigmas = await Paradigmas.create({nome,linguagens,descricao});

        return res.json(paradigmas);
    } 
};