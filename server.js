'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const client=require('./cache/redisCache');

const app = express()

//Set initial visits
// client.set('visits', 0);

// configure body parser and cors
app.use(bodyParser.raw({ type: 'application/jwt' }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({
	limit: "50mb", extended: true, parameterLimit: 50000
}));
app.use(cors());
//defining the root endpoint
// app.get('/', (req, res) => {
//     client.get('visits', (err, visits) => {
//         res.send('Number of visits is: ' + visits)
//         client.set('visits', parseInt(visits) + 1)
//     })
// })

require('./routes')(app);

//specifying the listening port
app.listen(8081, ()=>{
    console.log('Listening on port 8081')
})