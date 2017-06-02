'use strict';

//return the typed in plate
var oldPlates = {}

function getPlate(thePlate){
  var plate = thePlate.toUpperCase();
  if (oldPlates[plate] === undefined && plate !== '' && plate.startsWith('CA') || plate.startsWith('CL') || plate.startsWith('CY') || plate.startsWith('CF')){
    oldPlates[plate] = 1;
    return plate;
  }
}
