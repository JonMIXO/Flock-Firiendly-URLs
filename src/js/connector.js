var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var onBtnClick = function (t, opts) {
  return t.card("url").then(function (card) {
    var str = JSON.stringify(card, null, 2);
    var parsedURL = JSON.parse(str);
    const url = new URL(parsedURL.url);
    return t.popup({
      title: "Flock Link",
      items: [{
        text: "https://a.tlkt.uk/" + url.pathname
      }]
    });
  }).catch(error => console.log(error));
};

var colorChange = function () {
  console.log('reached');
  var btn = document.querySelector('.button-link[title="Flock Link"]')
  btn.style.backgroundColor = '#263340';
  btn.style.color = '#ffffff';
  console.log(btn);
}

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    console.log(t);
    console.log(opts);
    return [{
      icon: GRAY_ICON,
      text: 'Flock Link',
      callback: onBtnClick,
      condition: 'edit',
      backgroundColor: '#263340',
      color: '#ffffff'
    }];
  }
});