
const Sequelize = require('sequelize')
const {STRING, UUID, UUIDV4} = Sequelize
const db = new Sequelize(
    process.env.DATABASE_URL || "postgres://localhost/acme_talent_2"
  );
const Client = db.define('client',{
    id:{
        type:UUID,
        primaryKey:true,
        defaultValue: UUIDV4
    },
    name:{
        type:STRING
    }
})

const Skill = db.define('skill',{
    id:{
        type:UUID,
        primaryKey:true,
        defaultValue: UUIDV4
    },
    name:{
        type:STRING
    }
})

const Client_Skill = db.define("Client_Skill",{
    id:{
        type:UUID,
        primaryKey:true,
        defaultValue: UUIDV4
    }
})

Client.belongsToMany(Skill, {through: "Client_Skill"})
Skill.belongsToMany(Client, {through: "Client_Skill"})

// const sync = async() =>{
//     await db.sync({force: true})
//     console.log('SYNC SUCCESSFUL')
// }

// sync()

module.exports = {
    db,
    Client,
    Skill,
    Client_Skill
}