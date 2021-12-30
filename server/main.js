const PORT = 9000
const app = require('./index')

const {db} = require('./db')

db.sync().then(()=>{
    app.listen(PORT, () => console.log(`

    Listening on port ${PORT}

    http://localhost:${PORT}/

`))
})




