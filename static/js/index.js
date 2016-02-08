var $, jQuery;

var $ = require('ep_etherpad-lite/static/js/rjquery').$;

exports.aceInitialized = function (hook, context) {
  $('#editorcontainerbox').addClass(" split");
  $('#rightpanebox').insertAfter($('#editorcontainerbox'));
  Split(['#editorcontainerbox', '#rightpanebox'], {
    direction: 'horizontal',
    gutterSize: '6',
    cursor: 'grabbing'
  });
}
