const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// doneill318
// Attack18!

const Wish = require('./models/wish');

const app = express();

mongoose.connect('mongodb+srv://doneill318:Attack18!@cluster0-w9cwa.mongodb.net/wish-app?retryWrites=true')
  .then(() => {// Promise
    console.log('Connected to database!');
  })
  .catch(() => {// Catch statemenet
    console.log('Connection failed.');
  });


// Incorporate BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type,Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/wishes', (req, res, next) => {
  const wish = new Wish({
    name: req.body.name,
    url:  req.body.url
  });
  console.log(wish);
  wish.save();
  res.status(201).json({// everything is okay, a new resource was created
    message: 'Wish added successfully'
  });
});

app.get('/api/wishes', (req, res, next) => {
  Wish.find().then(documents => {
    res.status(200).json({
      message: 'Wishes fetched succesfully!',
      wishes: documents
    });
  });
});

module.exports = app;
