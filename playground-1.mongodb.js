
use('rescue'),
  
// Insert a few documents into the sales collection.
db.animals.insertOne([
  {_id: 2002, name: "Thorn", gender: "Male", species: "Reptile", breed: "PythonGarden Snake", dateOfRescue: "2026-01-30T00:00:00Z", "adopted": false, "colours": ["Grey", "Black" ],"shelterLocation": "House 3 in St Francis Building", "tags": "quiet in nature", "intakeOfficer": "Jane O'Connor", "weightKg": "2.5kg", 
}
  ]);
  
db.animals.find(
  {species:"Canine"}, {gender: "Male"}
  ).pretty()

  db.animals.find(
    {"shelterLocation.building": "St. Francis"})

    db.animals.find(
      {tags:"needs training"}, {_id:0,breed:1}).pretty()

      db.animals.countDocuments({tags: "friendly"})