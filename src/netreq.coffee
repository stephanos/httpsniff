class NetReq

  constructor: (id, HAR) ->
    @id = id
    @HAR = HAR

  # RESPONSE

  respContent: ->
    @HAR.response.content

  respStatus: ->
    @HAR.response.status

  respCookies: ->
    @HAR.response.cookies

  respHeaders: ->
    @HAR.response.headers

  isHtmlResp: ->
    @respContent().mimeType.indexOf("text/html") != -1

  isPlainResp: ->
    @respContent().mimeType.indexOf("text/plain") != -1


  # REQUEST

  reqUrl: ->
    @HAR.request.url

  reqPath: ->
    purl(@reqUrl()).attr('relative')

  reqHost: ->
    purl(@reqUrl()).attr('host')

  reqCookies: ->
    @HAR.request.cookies

  reqMethod: ->
    @HAR.request.method

  reqData: ->
    @HAR.request.postData

  reqQuery: ->
    @HAR.request.queryString

  reqHeaders: ->
    @HAR.request.headers

  reqHeadersStr: ->
    hh = ""
    for header in @reqHeaders()
      if header.name.trim().length != 0
        hh += header.name + " : " + header.value + "\n"
    hh