var regNumbers = {};
console.log(regNumbers);

for (var i = 0; i < regNumbers.length; i++) {
    
}

function add() {
    'use strict';
    var x, l, t;
    //variable x - store the new created element
    x = document.createElement('li');
    //l - for the typed in text
    l = document.getElementById('text').value;
    //t - changes whats been tyoed to an uppercase text
    t = document.createTextNode(l.toUpperCase());
    //if l length id greater than zero and it is not a blank space
    if (l.length > 0 && l !== " ") {
        //in the new element add the typed in text displaying it in uppercase form
        x.appendChild(t);
        //in the ul list created now display the new element with the typed in text
        document.getElementById('lister').appendChild(x);
    }
    //add the new plate to the empty object
    regNumbers[l] = 1;
    //clear the text box
    document.getElementById('text').value = "";
}

function filter() {
    'use strict';
    var opt, all, cpt, stell, paarl, ca, cj, cl, list;
    opt = document.getElementById("filter").value;
    all = document.getElementById("all").innerHTML;
    cpt = document.getElementById("cpt").innerHTML;
    stell = document.getElementById("stell").innerHTML;
    paarl = document.getElementById("paarl").innerHTML;
    list = document.getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        var curElem = list[i];
        if (opt === cpt && !curElem.textContent.startsWith('CA')) {
            curElem.style.display = 'none';
        } else if (opt === stell & !curElem.textContent.startsWith('CL')) {
            curElem.style.display = 'none';
        } else if (opt === paarl && !curElem.textContent.startsWith('CJ')) {
            curElem.style.display = 'none';
        } else if (opt === all) {
            curElem.style.display = 'block';
        } else {
            curElem.style.display = 'block';
        }
    }
}


//Data:
//Paarl plate 'CJ'
//Cape Town plate 'CA'
//Stellenbosch plate 'CL'





