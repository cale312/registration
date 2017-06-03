'use strict';

// returns a new list of array
var newArray = [];
function deletePlate(plateToDelete, plates){
  for (let i = 0; i < plates.length; i++){
    if (plates[i] === plateToDelete){
      newArray.push(plates[i]);
    }
  }
  return newArray;
}
