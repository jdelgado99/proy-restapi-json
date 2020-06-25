module.exports = function(app) {
 
    var persons = require('../controllers/person.controller.js');
 
    // Create a new Person
    app.post('/api/persons', persons.create);
 
    // Retrieve all Person
    app.get('/api/persons', persons.findAll);
 
    // Retrieve a single Person by Id
    app.get('/api/persons/:id', persons.findOne);
 
    // Update a Person  with Id
    app.put('/api/persons/:id', persons.update);
 
    // Delete a Person with Id
    app.delete('/api/persons/:id', persons.delete);
}
