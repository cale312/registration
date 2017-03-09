function add() {
    'use strict';
    //variable x - store the new created element
    var x = document.createElement('li'),
        //l - for the typed in text
        l = document.getElementById('text').value,
        //t - changes whats been tyoed to an uppercase text
        t = document.createTextNode(l.toUpperCase());
    //if l length id greater than zero and it is not a blank space
    if (l.length > 0 && l !== " ") {
        //in the new element add the typed in text displaying it in uppercase form
        x.appendChild(t);
        //in the ul list created now display the new element with the typed in text
        document.getElementById('lister').appendChild(x);
    }
    //clear the text box
    document.getElementById('text').value = "";
}

function filter() {
    'use strict';
    var opt = document.getElementById("filter").value,
        all = document.getElementById("all").innerHTML,
        cpt = document.getElementById("cpt").innerHTML,
        stell = document.getElementById("stell").innerHTML,
        paarl = document.getElementById("paarl").innerHTML;
    if (opt === cpt) {
        alert('filter Cape Town');
        
    } else if (opt === stell) {
        alert('filter Stellenbosch');
        
    } else if (opt === paarl) {
        alert('filter Paarl');
        
    }
}


//Data:
//Paarl plate 'CJ'
//Cape Town plate 'CA'
//Stellenbosch plate 'CL'





