const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/:data', function(req,res,next){
    let data = req.params['data'];
    fs.readFile(`./data/data-${data}.json`, 'utf8', (err,data) => {
        if(err){
            res.status(500).end(JSON.stringify(err));
        }
        else{
            res.status(200).end(data);
        }
    });
});

router.get('/:carriers/:format', function(req,res,next){
    let carrierName = req.params['carriers'];
    let format = req.params['format'];
    let qs = JSON.stringify(req.query);
    res.send(`carrier name is ${carrierName} and format is ${format} and query is ${qs}`);
    //send is express
    //end is node
});

router.post('/:carriers/:format', function(req,res,next){
    let carrierName = req.params['carriers'];
    let format = req.params['format'];
    let qs = JSON.stringify(req.query);
    let reqbody = JSON.stringify(req.body);
    res.send(`carrier name is ${carrierName} and format is ${format} and query is ${qs} and req body is ${reqbody}`);
    //send is express
    //end is node
});

module.exports = router;