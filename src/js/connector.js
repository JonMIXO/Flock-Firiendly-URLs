var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var onBtnClick = function (t, opts) {
  return t.card("url").then(function (card) {
    var str = JSON.stringify(card, null, 2);
    var parsedURL = JSON.parse(str);
    const url = new URL(parsedURL.url);
    var shortUrl = "https://a.tlkt.uk" + url.pathname
    var textbox = document.createElement("input");
    textbox.setAttribute('type', 'text');
    textbox.setAttribute('value', shortUrl);
    return t.popup({
      title: "Flock Link",
      items: [{
        text: 'ShortURL',
        callback: function (t, opts) {
          replaceWithTB(textbox)
        }
      }]
    });
  }).catch(error => console.log(error));
};

function replaceWithTB(textbox) {
  console.log('reached func');
  var popup = t.popup.querySelector('.selected')
  console.log(popup);
  popup.appendChild(textbox);
}

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      icon: GRAY_ICON,
      text: 'Flock Link',
      callback: onBtnClick,
      condition: 'edit',
      backgroundColor: '#263340',
      color: '#ffffff'
    }]
  }
});