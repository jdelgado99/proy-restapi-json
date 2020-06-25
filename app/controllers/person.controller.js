var persons = {
        person_1: {
          rut: "13818855-8",
          name: "Juan",
          lastName: "Antonio",
	  age:25,
	  course:"CloudComputing",
          id: 1
        },

        person_2: {
          rut: "13818855-8",
          name: "Juan",
          lastName: "Antonio",
          age:25,
          course:"CloudComputing",
          id: 2
          },

        person_3: {
	  rut: "13818855-8",
          name: "Juan",
          lastName: "Antonio",
          age:25,
          course:"CloudComputing",
          id: 3        
          },

        person_4: {
          rut: "13818855-8",
          name: "Juan",
          lastName: "Antonio",
          age:25,
          course:"CloudComputing",
          id: 4

          }
      }
 
exports.create = function(req, res) {
  var newPerson = req.body;
    persons["person_" + newPerson.id] = newPerson;
  console.log("--->After Post, persons:\n" + JSON.stringify(persons, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newPerson, null, 4));
};
 
exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(persons, null, 4));
    res.end("All persons: \n" + JSON.stringify(persons, null, 4));  
};
 
exports.findOne = function(req, res) {
    var person = persons["person_" + req.params.id];
    console.log("--->Find person: \n" + JSON.stringify(person, null, 4));
    res.end( "Find a person:\n" + JSON.stringify(person, null, 4));
};
 
exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var updatedPerson = req.body; 
  if(persons["person_" + id] != null){
    // update data
    persons["person_" + id] = updatedPerson;
 
    console.log("--->Update Successfully, persons: \n" + JSON.stringify(persons, null, 4))
    
    // return
    res.end("Update Successfully! \n" + JSON.stringify(updatedPerson, null, 4));
  }else{
    res.end("Don't Exist person:\n:" + JSON.stringify(updatedPerson, null, 4));
  }
};
 
exports.delete = function(req, res) {
  var deletePerson = persons["person_" + req.params.id];
    delete persons["person_" + req.params.id];
    console.log("--->After deletion, person list:\n" + JSON.stringify(persons, null, 4) );
    res.end( "Deleted person: \n" + JSON.stringify(deletePerson, null, 4));
};

