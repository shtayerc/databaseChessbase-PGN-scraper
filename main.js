function main(){
  data = "";
  var date = document.getElementsByClassName('cbeventdate')[0].innerHTML;
  var nl = "&#10;";
  data += '[Event "' + document.getElementsByClassName('cbevent')[0].innerHTML + '"]' + nl;
  data += '[Site "' + document.getElementsByClassName('cbsite')[0].innerHTML + '"]' + nl;
  data += '[Date "' + date.slice(6, 11) + '.' + date.slice(3, 5) + '.' + date.slice(0, 2) + '"]' + nl;
  data += '[White "' + document.getElementsByClassName('cbplayerwhite')[0].getElementsByTagName('span')[0].innerHTML + '"]' + nl;
  data += '[Black "' + document.getElementsByClassName('cbplayerblack')[0].getElementsByTagName('span')[0].innerHTML + '"]' + nl;
  data += '[WhiteElo "' + document.getElementsByClassName('cbplayerwhite')[0].getElementsByTagName('span')[1].innerHTML + '"]' + nl;
  data += '[BlackElo "' + document.getElementsByClassName('cbplayerblack')[0].getElementsByTagName('span')[1].innerHTML + '"]' + nl;
  data += '[Result "' + document.getElementsByClassName('cbresult')[0].getElementsByTagName('span')[0].innerHTML.replace('–', '-') + '"]' + nl + nl;
  var game = "";
  for (var i = 0; i < document.getElementsByClassName('cbmove').length; i++) {
    game += document.getElementsByClassName('cbmove')[i].innerHTML + ' ';
  }
  data += game;
  var d = document.createElement('button');
  d.innerHTML = "Copy game";
  d.style.position = 'absolute';
  d.style.top = '30%';
  d.style.left = '50%';
  d.style.zIndex = '9999';
  d.id = 'copy';
  d.onclick = function () {
    try {
      var t = document.createElement('textarea');
      t.innerHTML = data;
      document.body.appendChild(t);
      t.focus();
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
      var b = document.getElementById('copy');
      document.body.removeChild(b);
      alert('PGN copied successfully!');
    } catch (e) {
      alert('PGN copying failed!');
    };
  };
  document.body.appendChild(d);
}
main();
