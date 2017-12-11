var express = require('express');
var router = express.Router();

var PersonController = require('./PersonController');

//http://localhost:3001/api/v1/person/save
// save a new person
router.route('/save').post(PersonController.savePerson);

//http://localhost:3001/api/v1/person/all
// find all
router.route('/all').get(PersonController.findAllPerson);

module.exports = router;