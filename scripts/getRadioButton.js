'use strict';

// return the checked radio button
function getRadioButton(button){
  for (let i = 0; i < button.length; i++){
    if (button[i].checked){
      return button[i].value;
    }
  }
}
