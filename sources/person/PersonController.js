var Person = require('./PersonModel');

var save = (req, res) => {
  var person = new Person({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
    weight: req.body.weight,
    height: req.body.height
  });
  person.save((err, data) => {
    if (err) {
      console.log('Error ' , err);
      return res.status(500).json({
        message: 'An error has occurred',
        error: err
      });
    }
    console.log(data);
    res.status(201).json({
      message: 'Person saved',
      result: data
    });
  });
};

var findAll = (req, res) => {
  Person.find().exec()
    .then((data) => {
      res.status(200).json({
        message: 'List of people',
        result: data
      });
    }).catch((err) => {
      return res.status(500).json({
        message: 'An error has occurred',
        error: err
      });
    });
};

module.exports = {
  savePerson: save,
  findAllPerson: findAll
};