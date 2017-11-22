let express = require('express');
let myApp = express();
const path  = require('path');
const http  = require('http');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');
let flights = require('./models/flightsModel');
mongoose.connect('mongodb://localhost/Flights');





/**
 * Requiring the routes....
 */
let myRoutes = require('./routes/apiRoutes');


/**
 * Body parsing to the JSON format
 */

myApp.use(bodyParser.json());
myApp.use(bodyParser.urlencoded({extended:false}));


/**
 * Set static directory
 */

myApp.use(express.static(path.join(__dirname,'dist')));

/**
 * Configurations which are specific to your various environments
 * 1) DEV
 * 2) Stage
 * 3) LT
 * 4) UAT
 * 5) Pre-PROD [EBay]
 * 6) IT [Integration Environment]
 * 7) PROD [Alpha/Beta/GA]
 *
 */


/**
 * Handles all the URLs which start with /api
 */


/**
 * Handles all the URLs that does not match any of the above routes...
 */

myApp.use('/api/', myRoutes);
myApp.use('/flights/getFlights', function (req,res) {
  flights.find(function (err,flights) {
    if(err){
      res.status(500).end(JSON.stringify(err));
    } else{
      res.status(200).end(JSON.stringify(flights));
    }
  })

});
/**
 * To serve a static file in case we dont match any route...
 */
myApp.get('*', function (req,res,next) {
   res.sendFile(path.join(__dirname ,"dist", "index.html"));
});

/**
 * The Error Handler Middleware..
 */
myApp.use(function (err,req,res,next) {
    let myErr= err;
    console.log(`Error Occured : ${myErr}`);
    res.end(JSON.stringify(myErr));

})

myApp.listen(8085);
console.log('listening at 8085..');