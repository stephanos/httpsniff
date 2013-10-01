var info;

info = function(msg) {
  var console;
  if (chrome.experimental && chrome.experimental.devtools && chrome.experimental.devtools.console) {
    console = chrome.experimental.devtools.console;
    return console.addMessage(console.Severity.Log, msg);
  } else if (chrome.devtools.inspectedWindow) {
    return chrome.devtools.inspectedWindow["eval"]("console.log('" + msg + "');");
  } else {
    return console.log(msg);
  }
};
