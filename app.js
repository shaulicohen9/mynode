//Require=============
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
const apiRoutes = require('./routes/api-routes');
const usersRoutes = require('./routes/user-routes');
//Uses=================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//   This Middleware will handle EVERY Request that our server receives
app.use(function (req, res, next) {
    console.log(`received Request: ${req.method} , ${req.url}, ${req.body}`);
    next();
})
app.use('/users', usersRoutes);
app.use('/api/users', apiRoutes);
app.use(express.static('conference'));
//port=================
const port=process.env.PORT || 5100;
app.listen(port, ()=> {
    console.log( `port ${port}`);
});
// const port=process.env.url
