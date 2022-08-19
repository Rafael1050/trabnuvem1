
const db = require('../config/db');


module.exports={
    
    async getMain(req,res){
        res.json("Bem vindo a API Musicas");
    },

    async getAll(req,res){

        /*res.json({"id":1,
        "Nome":"Wish You Were Here",
        "Artist":"Pink Floyd",
        "Album":"Wish You Were Here",
        "Ano": 1985
        });*/
        
        try {

            let response = await db.query('SELECT * FROM musica');
            res.json(response[0]);
    
        } catch (error) {
            console.log(error);
        }
       

    },

    async getbyID(req,res){

        try {

            let id = req.params.id

            let response = await db.query('SELECT * FROM musica WHERE id = ?',[id]);
            res.json(response[0]);
    
        } catch (error) {
            console.log(error);
        }

    },
    
    async insert(req,res){
        let data = {
            "nome":req.body.nome,
            "artist":req.body.artist,
            "album":req.body.album,
            "ano":req.body.ano,
        }

        try{
            
            let response = await db.query('INSERT INTO musica SET ?',[data]);
            res.json(response);

        }catch(error){
            console.log(error);
        }

    },

    async atualizar(req,res){

        let data = {
            "nome":req.body.nome,
            "artist":req.body.artist,
            "album":req.body.album,
            "ano":req.body.ano,
        }

        try {

            let id = req.params.id

            let response = await db.query('UPDATE musica SET ? WHERE id = ?',[data,id]);
            res.json(response[0]);
    
        } catch (error) {
            console.log(error);
        }

    },

    async delete(req,res){

        try {

            let id = req.params.id

            let response = await db.query('DELETE FROM musica WHERE id = ?',[id]);
            res.json(response[0]);
    
        } catch (error) {
            console.log(error);
        }

    }

};