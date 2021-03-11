const Linguagens = require('../models/Linguagens');

module.exports = {
    async index(req, res) {
        const linguagens = await Linguagens.findAll();
    
        return res.json(linguagens);
    },
    async find(req,res){
        const {nome} = req.body;
        const linguagens = await Linguagens.findOne({where: {nome:nome}});
        console.log(linguagens);
        if (!nome){
            return res.status(400).json({error:'Linguagem não encontrada'})
        }
        return res.json(linguagens);
    },
    async store(req,res){
        const {nome,paradigmas,descricao} = req.body;

        const linguagens = await LinguagensAdd.create({nome,paradigmas,descricao});

        return res.json(linguagens);
    }
};
