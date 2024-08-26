const express = require('express');
const app = express();
const bodyParser = require('body-parser') //needed to fetch info which client provides, into our database
const cors = require('cors'); //eg to understand cors: when an react application is running on port 3000, and it needs something to fetch from 8000port, ie; 8000port means from backend, it'll need 'cors' to accept the request
const AuthRouter = require('./src/Routes/AuthRouter');

require('dotenv').config();
require('./src/Models/db')  // when it runs it'll show mongodb connected, since it;ll call that file(this info is ony for my understanding, ignore this if u r reading this;-;)
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res)=>{
    res.send('Connected');
});

app.use(bodyParser.json());
app.use(cors()); // we can add methods in cors() for adding more security (means, u can do something so that it is only available to fetch sonething by only that port), but for now it is open to world
app.use('./auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})