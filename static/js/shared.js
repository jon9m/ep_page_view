var _ = require('ep_etherpad-lite/static/js/underscore');

var collectContentPre = function(hook, context){
  var tname = context.tname;
  var state = context.state;
  var cls = context.cls;
  var lineAttributes = state.lineAttributes

  var tagIndex = tname;
  if(tagIndex >= 0){
    lineAttributes['pageBreak'] = tagIndex;
  }else if(cls.indexOf('pageBreakComputed') != -1){
    lineAttributes['pageBreak'] = tagIndex;
  }
};

var collectContentPost = function(hook, context){
  var tname = context.tname;
  var state = context.state;
  var lineAttributes = state.lineAttributes
  var cls = context.cls;
  var tagIndex = tname;

  if(tagIndex >= 0){
    delete lineAttributes['pageBreak'];
  }else if(cls.indexOf('pageBreakComputed') != -1){
    delete lineAttributes['pageBreak'];
  }
};

exports.collectContentPre = collectContentPre;
exports.collectContentPost = collectContentPost;
