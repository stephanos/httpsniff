devtools = chrome.devtools
panels = devtools.panels


# panel initialization
onPanelCreated = (panel) ->

  reqs = []
  scope = null
  networkId = 0

  updateUI = ->
    scope?.$apply ->
      scope.requests = reqs

  # track network requests
  devtools.network.onRequestFinished.addListener (har) ->
    netReq = new NetReq networkId, har
    if netReq.isHtmlResp() || netReq.isPlainResp()
      reqs.push(netReq)
      updateUI()

  # hook into panel window
  panelHooked = false
  panel.onShown.addListener (panelWin) ->
    if panelHooked then return
    panelHooked = true
    ctrl = panelWin.document.querySelector('#ctrl');
    scope = panelWin.angular.element(ctrl).scope()
    updateUI()


# create panel
panels.create "HTTP Sniffer", "logo.png", "panel.html", onPanelCreated