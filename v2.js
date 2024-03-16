setInterval(function() {
  var elements = document.getElementsByTagName('button');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerText == 'Закрасить') {
      elements[i].click();
    }
    if (elements[i].innerText == 'Push Pixel') {
      elements[i].click();
    }
  }
}, 500);
