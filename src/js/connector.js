var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

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

var onBtnClick = function (t, opts) {
  return t.card("url").then(function (card) {
    var str = JSON.stringify(card, null, 2);
    var parsedURL = JSON.parse(str);
    const url = new URL(parsedURL.url);
    var shortUrl = "https://a.tlkt.uk" + url.pathname
    var textbox = document.querySelector(".ffurl");
    textbox.setAttribute('value', shortUrl);
    copyToClip();
    return t.popup({
      title: "Flock Link",
      items: [{
        text: 'ShortURL',
        url: index.html
      }]
    });
  }).catch(error => console.log(error));
};

function copyToClip() {
  var copyText = document.querySelector(".ffurl");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}