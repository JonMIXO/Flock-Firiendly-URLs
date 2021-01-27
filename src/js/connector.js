var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var onBtnClick = function (t, opts) {
  return t.card("url").then(function (card) {
    console.log(card);
    var str = JSON.stringify(card, null, 2);
    console.log(str);
    var parsedURL = JSON.parse(str);
    console.log(parsedURL.url);
    copyToClipboard(parsedURL.url);
  }).catch(error => console.log(error));
};

function copyToClipboard(text) {
  if (navigator.clipboard) { // default: modern asynchronous API
    return navigator.clipboard.writeText(text);
  } else if (window.clipboardData && window.clipboardData.setData) { // for IE11
    window.clipboardData.setData('Text', text);
    return Promise.resolve();
  } else {
    // workaround: create dummy input
    const input = h('input', {
      type: 'text'
    });
    input.value = text;
    document.body.append(input);
    input.focus();
    input.select();
    document.execCommand('copy');
    input.remove();
    return Promise.resolve();
  }
}

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