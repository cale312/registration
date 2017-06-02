'use strict';

var newPlate = document.querySelector('.plate-number');
var addBtn = document.querySelector('.add-btn');
var filterBtn = document.querySelector('.filter-btn');
var displayPlates = document.querySelector('.plate-list');
var platesWrapper = document.querySelector('.plates-wrapper');
var radioButtons = document.getElementsByName('town');

addBtn.addEventListener('click', function(){
  var thePlate = getPlate(newPlate.value);
  var appendPlate = createLi(thePlate);
  if (appendPlate !== undefined){
    displayPlates.appendChild(appendPlate);
  }
  newPlate.value = '';
});

filterBtn.addEventListener('click', function(){
  var checkedButton = getRadioButton(radioButtons);
  // var filterResults  = filterPlates(checkedButton);
});
