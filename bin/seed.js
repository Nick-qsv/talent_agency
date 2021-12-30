const {db, Client, Skill}=require('../server/db/index')

const seed = async() =>{
    await db.sync({force:true})

    const nick = await Client.create({name: 'Nick'})
    const prof = await Client.create({name: 'Prof'})
    const henny = await Client.create({name: 'Henny'})
    const john = await Client.create({name: 'John'})
    const devin = await Client.create({name: 'Devin'})
    
    const coding = await Skill.create({name: 'coding'})
    const weightlifting = await Skill.create({name: 'weightlifting'})
    const reading = await Skill.create({name: 'reading'})
    const writing = await Skill.create({name: 'writing'})
    const music = await Skill.create({name: 'music'})
    const cooking = await Skill.create({name: 'cooking'})
    const halo3 = await Skill.create({name: 'halo3'})

    await nick.addSkill(writing)
    await nick.addSkill(reading)
    await nick.addSkill(halo3)
    await john.addSkill(coding)
    await john.addSkill(cooking)
    await devin.addSkill(coding)
    await devin.addSkill(weightlifting)
    await devin.addSkill(cooking)
    await prof.addSkill(coding)
    await prof.addSkill(music)
    await prof.addSkill(cooking)
    await henny.addSkill(halo3)
    await henny.addSkill(coding)
    await henny.addSkill(writing)

    db.close()
    console.log(
        "Seeding Successful!!!!!!!!!!!!!!!"
    )
}

seed().catch(err =>{
    db.close()
    console.log(`
    Error Seeding:

    ${err.message}

    ${err.stack}

    `)
})

