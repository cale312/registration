'use strict';

// return plates according to town selected
function filterPlates(town, plates){
  var filteredPlates = [];
  for (let i = 0; i < plates.length; i++){
    var curPlate = plates[i].textContent;
    if (town === 'cpt' && curPlate.startsWith('CA')){
      filteredPlates.push(curPlate);
    } else if (town === 'stell' && curPlate.startsWith('CL')){
      filteredPlates.push(curPlate);
    } else if (town === 'bell' && curPlate.startsWith('CY')){
      filteredPlates.push(curPlate);
    } else if (town === 'kuil' && curPlate.startsWith('CF')){
      filteredPlates.push(curPlate);
    }
  }
  return filteredPlates;
}
