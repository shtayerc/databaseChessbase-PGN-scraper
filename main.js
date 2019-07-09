function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function getHTML(className, index){
    var el = document.getElementsByClassName(className);
    return el ? (el[index] ? el[index].innerHTML : '') : '';
}

function getTagHTML(className, classIndex, tagName, tagIndex){
    var el = document.getElementsByClassName(className);
    el = el ? (el[classIndex] ? el[classIndex] : '') : '';
    if (el) {
        var tag = el.getElementsByTagName(tagName);
        return tag ? (tag[tagIndex] ? tag[tagIndex].innerHTML : '') : '';
    }
    return '';
}

function main(){
    data = "";
    var date = getHTML('cbeventdate', 0);
    var nl = "\n";
    data += '[Event "' + getHTML('cbevent', 0) + '"]' + nl;
    data += '[Site "' + getHTML('cbsite', 0) + '"]' + nl;
    data += '[Date "' + (date ? date.slice(6, 11) + '.' + date.slice(3, 5) + '.' + date.slice(0, 2) : '') + '"]' + nl;
    data += '[White "' + getTagHTML('cbplayerwhite', 0, 'span', 0) + '"]' + nl;
    data += '[Black "' + getTagHTML('cbplayerblack', 0, 'span', 0) + '"]' + nl;
    data += '[WhiteElo "' + getTagHTML('cbplayerwhite', 0, 'span', 1) + '"]' + nl;
    data += '[BlackElo "' + getTagHTML('cbplayerblack', 0, 'span', 1) + '"]' + nl;
    var res = getTagHTML('cbresult', 0, 'span', 0).replace('–', '-');
    data += '[Result "' + ((res == (decodeHtml('&frac12;')+'-'+decodeHtml('&frac12;'))) ? '1/2-1/2' : res) + '"]' + nl + nl;
    var game = "";
    var moves = document.getElementsByClassName('cbmove');
    for (var i = 0; i < moves.length; i++) {
        game += moves[i].innerHTML + ' ';
    }
    data += game;
    alert(data);
}
main();