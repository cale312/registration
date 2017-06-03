'use strict';

var newPlate = document.querySelector('.plate-number');
var addBtn = document.querySelector('.add-btn');
var filterBtn = document.querySelector('.filter-btn');
var displayPlates = document.querySelector('.plate-list');
var platesWrapper = document.querySelector('.plates-wrapper');
var radioButtons = document.getElementsByName('town');
var platesArr = [];

addBtn.addEventListener('click', function(){
  let thePlate = getPlate(newPlate.value);
  platesArr  = storePlates(thePlate);
  let appendPlate = createLi(thePlate);
  if (appendPlate !== undefined){
    displayPlates.appendChild(appendPlate);
  }
  newPlate.value = '';
});

filterBtn.addEventListener('click', function(){
  let allPlates = document.getElementsByTagName('li');
  let checkedButton = getRadioButton(radioButtons);
  let filteredPlates = filterPlates(checkedButton, platesArr);

  for (let i = 0; i < allPlates.length; i++){
    var curElem = allPlates[i];
    if(checkedButton === 'cpt' && !curElem.textContent.startsWith('CA')){
      curElem.style.display = 'none';
    } else if (checkedButton === 'stell' && !curElem.textContent.startsWith('CL')){
      curElem.style.display = 'none';
    } else if (checkedButton === 'bell' && !curElem.textContent.startsWith('CY')){
      curElem.style.display = 'none';
    } else if (checkedButton === 'kuil' && !curElem.textContent.startsWith('CF')){
      curElem.style.display = 'none';
    } else {
      curElem.style.display = 'inline-block';
    }
  }
});

platesWrapper.addEventListener('click', function(evt){
  let plateToDelete = evt.target;
  if (plateToDelete){
    plateToDelete.style.display = 'none';
  }
});
