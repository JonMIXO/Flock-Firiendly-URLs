var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var onBtnClick = function (t, opts) {
  return t.card("url").then(function (card) {
    var str = JSON.stringify(card, null, 2);
    var parsedURL = JSON.parse(str);
    const url = new URL(parsedURL.url);
    var shortUrl = "https://a.tlkt.uk" + url.pathname

    return t.popup({
      title: "Flock Link",
      items: [{
        text: t.safe(shortUrl),
        callback: copyToClipboard(shortUrl)
      }]
    });
  }).catch(error => console.log(error));
};

function copyToClipboard(element) {
  vartemp = ("<input>").document.getElementsByTagName('body').append(temp).temp.val((element).text()).select().document.execCommand("copy").temp.remove();
}

// function replaceWithP () {
//   var textbox = document.createElement("input");
//   textbox.setAttribute('type', 'text');
//   textbox.setAttribute('value', shortUrl);
// }

// function updateClipboard(newClip) {
//   console.log('Clip: ' + newClip);
//   navigator.clipboard.writeText(newClip).then(function () {
//     console.log('Success: ' + newClip);
//   }, function () {
//     console.log('Failed to copy');
//   });
// }

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      icon: GRAY_ICON,
      text: 'Flock Link',
      callback: onBtnClick,
      condition: 'edit',
      backgroundColor: '#263340',
      color: '#ffffff'
    }, () => {
      console.log('reached');
      var btn = document.querySelector('.button-link[title="Flock Link"]')
      btn.style.backgroundColor = '#263340';
      btn.style.color = '#ffffff';
    }];
  }
});