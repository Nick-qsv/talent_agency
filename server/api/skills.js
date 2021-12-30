const router = require('express').Router()
const {Skill} = require('../db')

router.get('/', async(req,res,next)=>{
    try{
        res.send(await Skill.findAll())
    }catch(error){
        next(error)
    }
})

module.exports = router