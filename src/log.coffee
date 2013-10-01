info = (msg) ->
  if chrome.experimental && chrome.experimental.devtools && chrome.experimental.devtools.console
    console = chrome.experimental.devtools.console
    console.addMessage(console.Severity.Log, msg)
  else if chrome.devtools.inspectedWindow
    chrome.devtools.inspectedWindow.eval("console.log('" + msg + "');");
  else
    console.log(msg)