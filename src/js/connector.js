import * as clipboard from "clipboard-polyfill/text";

var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var onBtnClick = function (t, opts) {
  return t.card("url").then(function (card) {
    console.log(card);
    var str = JSON.stringify(card, null, 2);
    console.log(str);
    var parsedURL = JSON.parse(str);
    console.log(parsedURL.url);
    clipboard.writeText(parsedURL.url).then(
      function () {
        console.log("success!");
      },
      function () {
        console.log("error!");
      }
    );
  });
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      // usually you will provide a callback function to be run on button click
      // we recommend that you use a popup on click generally
      icon: GRAY_ICON, // don't use a colored icon here
      text: 'Flock Firendly URL',
      callback: onBtnClick,
      condition: 'edit'
    }]
  }
});