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
  var btn = document.querySelector('.button-link[title="Flock Link"]')
  btn.style.backgroundColor = '#263340';
  btn.style.color = '#ffffff';
}

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      // usually you will provide a callback function to be run on button click
      // we recommend that you use a popup on click generally
      icon: GRAY_ICON, // don't use a colored icon here
      text: 'Flock Link',
      callback: onBtnClick,
      condition: 'edit'
    }]
  }

}, colorChange());