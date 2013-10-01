var devtools, onPanelCreated, panels;

devtools = chrome.devtools;

panels = devtools.panels;

onPanelCreated = function(panel) {
  var networkId, panelHooked, reqs, scope, updateUI;
  reqs = [];
  scope = null;
  networkId = 0;
  updateUI = function() {
    return scope != null ? scope.$apply(function() {
      return scope.requests = reqs;
    }) : void 0;
  };
  devtools.network.onRequestFinished.addListener(function(har) {
    var netReq;
    netReq = new NetReq(networkId, har);
    if (netReq.isHtmlResp() || netReq.isPlainResp()) {
      reqs.push(netReq);
      return updateUI();
    }
  });
  panelHooked = false;
  return panel.onShown.addListener(function(panelWin) {
    var ctrl;
    if (panelHooked) {
      return;
    }
    panelHooked = true;
    ctrl = panelWin.document.querySelector('#ctrl');
    scope = panelWin.angular.element(ctrl).scope();
    return updateUI();
  });
};

panels.create("HTTP Sniffer", "logo.png", "panel.html", onPanelCreated);
