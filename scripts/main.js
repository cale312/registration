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
  console.log(platesArr);
  let appendPlate = createLi(thePlate);
  if (appendPlate !== undefined){
    displayPlates.appendChild(appendPlate);
  }
  newPlate.value = '';
});

filterBtn.addEventListener('click', function(){
  let allPlates = document.getElementsByTagName('li');
  let thePlate = getPlate(newPlate.value);
  let checkedButton = getRadioButton(radioButtons);
  let filteredPlates = filterPlates(checkedButton, platesArr);

});
