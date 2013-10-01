(angular.module('httpsniff.controller', ['httpsniff.service'])).controller('RequestCtrl', function($scope) {
  $scope.status = function(status) {
    if (status >= 400) {
      return "danger";
    } else if (status >= 300) {
      return "warning";
    } else {
      return "success";
    }
  };
  return $scope.load = function(req) {
    var message, _ref, _ref1;
    message = {
      payload: 'create',
      data: {
        url: req.reqUrl(),
        headers: req.reqHeadersStr(),
        method: req.reqMethod(),
        payload: (_ref = req.reqData()) != null ? _ref.text : void 0,
        encoding: (_ref1 = req.reqData()) != null ? _ref1.mimeType : void 0
      }
    };
    info(req.reqData());
    return chrome.extension.sendMessage('hgmloofddffdnphfgcellkdfbfbjeloo', message);
  };
});
