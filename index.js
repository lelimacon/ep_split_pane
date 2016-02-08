
var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_afterEditbar = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_split_pane/templates/afterEditbar.ejs");
  return cb();
}
