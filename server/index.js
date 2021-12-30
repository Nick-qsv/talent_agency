const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/dist', express.static(path.join(__dirname, '..', 'dist')))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', require('./api'))

app.get('/',  (req, res)=> res.sendFile(path.join(__dirname,'..','client','index.html')));

module.exports = app


