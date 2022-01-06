const router = require('express').Router()
const {Client, Client_Skill} = require('../db')

//GET /api/clients/
router.get('/', async (req, res, next)=>{
    try{
        res.send(await Client.findAll())
    }catch(error){
        next(error)
    }
})

//GET /api/clients/clientskills
router.get('/clientskills', async(req,res,next)=>{
    try{
        res.send(await Client_Skill.findAll())
    }catch(error){
        next(error)
    }
})


router.get('/')
module.exports = router