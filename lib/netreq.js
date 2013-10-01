var NetReq;

NetReq = (function() {
  function NetReq(id, HAR) {
    this.id = id;
    this.HAR = HAR;
  }

  NetReq.prototype.respContent = function() {
    return this.HAR.response.content;
  };

  NetReq.prototype.respStatus = function() {
    return this.HAR.response.status;
  };

  NetReq.prototype.respCookies = function() {
    return this.HAR.response.cookies;
  };

  NetReq.prototype.respHeaders = function() {
    return this.HAR.response.headers;
  };

  NetReq.prototype.isHtmlResp = function() {
    return this.respContent().mimeType.indexOf("text/html") !== -1;
  };

  NetReq.prototype.isPlainResp = function() {
    return this.respContent().mimeType.indexOf("text/plain") !== -1;
  };

  NetReq.prototype.reqUrl = function() {
    return this.HAR.request.url;
  };

  NetReq.prototype.reqPath = function() {
    return purl(this.reqUrl()).attr('relative');
  };

  NetReq.prototype.reqHost = function() {
    return purl(this.reqUrl()).attr('host');
  };

  NetReq.prototype.reqCookies = function() {
    return this.HAR.request.cookies;
  };

  NetReq.prototype.reqMethod = function() {
    return this.HAR.request.method;
  };

  NetReq.prototype.reqData = function() {
    return this.HAR.request.postData;
  };

  NetReq.prototype.reqQuery = function() {
    return this.HAR.request.queryString;
  };

  NetReq.prototype.reqHeaders = function() {
    return this.HAR.request.headers;
  };

  NetReq.prototype.reqHeadersStr = function() {
    var header, hh, _i, _len, _ref;
    hh = "";
    _ref = this.reqHeaders();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      header = _ref[_i];
      if (header.name.trim().length !== 0) {
        hh += header.name + " : " + header.value + "\n";
      }
    }
    return hh;
  };

  return NetReq;

})();
