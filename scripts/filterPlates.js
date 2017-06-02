'use strict';

//
var filteredPlates = [];

function filterPlates(town, plates) {
  filteredPlates = []
  for (let i = 0; i < plates.length; i++) {
    var curPlate = plates[i];
    if (town === 'cpt' && curPlate.startsWith('CA')) {
      filteredPlates.push(curPlate);
    } else if (town === 'stell' && curPlate.startsWith('CL')) {
      filteredPlates.push(curPlate);
    } else if (town === 'bell' && curPlate.startsWith('CY')) {
      filteredPlates.push(curPlate);
    } else if (town === 'kuil' && curPlate.startsWith('CF')) {
      filteredPlates.push(curPlate);
    } else if (town === 'all'){
      filteredPlates.push(curPlate);
    }
  }
  return filteredPlates;
}
