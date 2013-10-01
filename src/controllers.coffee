(angular.module 'httpsniff.controller', ['httpsniff.service'])

  .controller 'RequestCtrl', ($scope) ->

    $scope.status = (status) ->
      if status >= 400
        "danger"
      else if status >= 300
        "warning"
      else
        "success"

    $scope.load = (req) ->
      message =
        payload: 'create'
        data:
          url: req.reqUrl()
          headers: req.reqHeadersStr()
          method: req.reqMethod()
          payload : req.reqData()?.text
          encoding: req.reqData()?.mimeType
      info(req.reqData())
      chrome.extension.sendMessage('hgmloofddffdnphfgcellkdfbfbjeloo', message)

