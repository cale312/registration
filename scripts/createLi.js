'use strict';

// create an li tag to append to the document
function createLi(plate){
  var li = document.createElement('li');
  var thePlate = document.createTextNode(plate);
  if (plate !== undefined){
    li.appendChild(thePlate);
    return li;
  }
}
