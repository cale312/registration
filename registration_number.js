function add() {
    'use strict';
    var li, text, textNode;
    //variable x - store the new created element
    li = document.createElement('li');
    //l - for the typed in text
    text = document.getElementById('text').value;
    //t - changes whats been tyoed to an uppercase text
    textNode = document.createTextNode(text.toUpperCase());
    //if l length id greater than zero and it is not a blank space
    if (text.length > 0 && text !== " ") {
        //in the new element add the typed in text displaying it in uppercase form
        li.appendChild(textNode);
        //in the ul list created now display the new element with the typed in text
        document.getElementById('lister').appendChild(li);
    }
    //clear the text box
    document.getElementById('text').value = "";
}

function filter() {
    'use strict';
    var opt, all, cpt, stell, paarl, list, curElem;
    //typed in town name to filter
    opt = document.getElementById("filter").value;
    all = document.getElementById("all").innerHTML;
    cpt = document.getElementById("cpt").innerHTML;
    stell = document.getElementById("stell").innerHTML;
    paarl = document.getElementById("paarl").innerHTML;
    list = document.getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        curElem = list[i];
        // if filter is set Cape Town and the printed out plates do not start with the Letter(s)
        if (opt === cpt && !curElem.textContent.startsWith('CA')) {
            //do not display them
            curElem.style.display = 'none';
        } else if (opt === stell & !curElem.textContent.startsWith('CL')) {
            curElem.style.display = 'none';
        } else if (opt === paarl && !curElem.textContent.startsWith('CJ')) {
            curElem.style.display = 'none';
        } else if (opt === all || opt === "") {
            curElem.style.display = 'inline-block';
        } else {
            curElem.style.display = 'inline-block';
        }
    }
}





