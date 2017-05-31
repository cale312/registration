function add() {
    'use strict';
    var li, text, textNode;
    li = document.createElement('li');
    text = document.getElementById('text').value;
    textNode = document.createTextNode(text.toUpperCase());
    if (text.length > 0 && text !== " ") {
        li.appendChild(textNode);
        document.getElementById('lister').appendChild(li);
    }
    document.getElementById('text').value = "";
}

function filter() {
    'use strict';
    var opt, all, cpt, stell, paarl, bellville, kuilsriver, list, curElem;
    opt = document.getElementById("filter").value;
    all = document.getElementById("all").innerHTML;
    cpt = document.getElementById("cpt").innerHTML;
    stell = document.getElementById("stell").innerHTML;
    paarl = document.getElementById("paarl").innerHTML;
    bellville = document.getElementById('bellville').innerHTML;
    kuilsriver = document.getElementById('kuilsriver').innerHTML;
    list = document.getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        curElem = list[i];
        if (opt === cpt && !curElem.textContent.startsWith('CA')) {
            curElem.style.display = 'none';
        } else if (opt === stell & !curElem.textContent.startsWith('CL')) {
            curElem.style.display = 'none';
        } else if (opt === paarl && !curElem.textContent.startsWith('CJ')) {
            curElem.style.display = 'none';
        } else if (opt === bellville && !curElem.textContent.startsWith('CY')) {
            curElem.style.display = 'none';
        } else if (opt === kuilsriver && !curElem.textContent.startsWith('CF')) {
            curElem.style.display = 'none';
        }else if (opt === all || opt === "") {
            curElem.style.display = 'inline-block';
        } else {
            curElem.style.display = 'inline-block';
        }
    }
}