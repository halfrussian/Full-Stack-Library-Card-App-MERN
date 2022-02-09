const express = require('express');
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors());

app.options('*', cors());

app.use(bodyParser.json());


const postsRoute = require('./routes/posts');

app.use('/', postsRoute);


app.get('/', (req, res) => {
  res.send('home')
})


mongoose.connect('mongodb+srv://joshmidla:PASSWORD-NOT-TELLING@cluster0.qgpgr.mongodb.net/books?retryWrites=true&w=majority',
() => console.log('connected to db'))

app.listen(5000, () => console.log('port'))
