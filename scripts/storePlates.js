'use strict';

// returns the plates as an array
var platesArray = [];

function storePlates(plate){
  if (plate !== undefined){
    platesArray.push(plate);
    return platesArray;
  }
}
