
use('rescue'),
  
// Insert a few documents into the sales collection.
db.animals.insertOne([
  {_id: 2002, name: "Thorn", gender: "Male", species: "Reptile", breed: "PythonGarden Snake", dateOfRescue: "2026-01-30T00:00:00Z", "adopted": false, "colours": ["Grey", "Black" ],"shelterLocation": "House 3 in St Francis Building", "tags": "quiet in nature", "intakeOfficer": "Jane O'Connor", "weightKg": "2.5kg", 
}
  ]);
  


  //taskssss

db.animals.find({$or: [
  {species:"Canine", gender: "Male"}]}).pretty()

  db.animals.find(
  {breed: "Poodle", tags: {$in: ["friendly", "good with kids"]}}).pretty()
  
  db.animals.find(
    {species: "Canine", tags: {$nin: ["quiet", "timid"]}}).pretty()

  db.animals.find( 
    {species: "Cat", weightKg:{$gt: 20}}).pretty()

  db.animals.find( 
    {"shelterLocation.houseNumber": {$gt: 21, $lt: 30}}).pretty()
  
    db.animals.countDocuments( 
      {"shelterLocation.houseNumber": {$gt: 21, $lt: 30}})
    
    db.animals.find( 
              {"vaccinations.amountMg": {$gt: 2, $lt: 5}}).pretty()

    db.animals.find( 
      {"species": "Budgie", "vaccinations.type": "distemper", "vaccinations.amountMg": {$eq: 5}}, {_id:1,breed:1,name:1}).pretty()    
      
      
    db.animals.countDocuments({intakeOfficer: "Jane O'Connor"})

    db.animals.find({intakeOfficer: {$nin: ["Jane O'Connor"]}}, {_id:0, name:1, intakeOfficer:1}).sort({intakeOfficer:1}).limit(5).pretty()