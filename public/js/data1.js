var wixBiSession = {
  initialTimestamp: Date.now(),
  requestId: publicModel.requestId,
  viewerSessionId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    }
  ),
  sessionId: '13ed58bf-f9fd-459c-92b9-198f30963f24',
  initialRequestTimestamp: performance.timeOrigin
    ? performance.timeOrigin
    : Date.now() - performance.now(),
  visitorId: publicModel.sessionInfo.visitorId,

  is_rollout: 1,
  is_platform_loaded: 0,
  suppressbi: false,
  dc: '208',
  renderType: 'bolt',
  wixBoltExclusionReason: '',
  wixBoltExclusionReasonMoreInfo: '',
  sendBeacon: function(url) {
    if (!wixBiSession.suppressbi) {
      var sent = false
      try {
        sent = navigator.sendBeacon(url)
      } catch (e) {}
      if (!sent) {
        new Image().src = url
      }
    }
  },
  sendBeat: (function() {
    var beatUrl =
      'https://frog.wix.com/bt?src=29&evid=3' +
      '&v=1.2888.0' +
      '&msid=66f668b0-7169-4d7b-bb2d-97df592b0656' +
      '&isp=0' +
      '&st=2' +
      '&dc=208' +
      '&iss=1' +
      '&url=' +
      encodeURIComponent(location.href.replace(/^http(s)?:\/\/(www\.)?/, ''))
    var referrer = document.referrer
    if (referrer) {
      beatUrl += '&ref=' + encodeURIComponent(referrer)
    }
    var match = document.cookie.match(/_wixCIDX=([^;]*)/)
    if (match) {
      beatUrl += '&client_id=' + match[1]
    }
    return function(et, name, extra, isPageEvent) {
      var tts = Math.round(performance.now())
      var ts = et === 1 ? 0 : Date.now() - wixBiSession.initialTimestamp
      if (name && performance.mark) {
        performance.mark(name + ' (beat ' + et + ')')
      }
      extra = extra || ''
      if (extra.indexOf('pn=') === -1) {
        extra = '&pn=1' + extra
      }
      if (isPageEvent) {
        beatUrl = beatUrl.replace('evid=3', 'evid=5')
      }
      wixBiSession.sendBeacon(
        beatUrl +
          '&et=' +
          et +
          (name ? '&event_name=' + encodeURIComponent(name) : '') +
          '&ts=' +
          ts +
          '&tts=' +
          tts +
          '&vsi=' +
          wixBiSession.viewerSessionId +
          '&rid=' +
          wixBiSession.requestId +
          '&viewer_name=' +
          encodeURIComponent(wixBiSession.renderType) +
          '&is_rollout=' +
          wixBiSession.is_rollout +
          (wixBiSession.sessionId
            ? '&sessionId=' + wixBiSession.sessionId
            : '') +
          (wixBiSession.visitorId ? '&vid=' + wixBiSession.visitorId : '') +
          (wixBiSession.siteMemberId
            ? '&mid=' + wixBiSession.siteMemberId
            : '') +
          '&is_cached=' +
          wixBiSession.isCached +
          '&caching=' +
          wixBiSession.caching +
          extra
      )
    }
  })()
}

;(function() {
  var microPop,
    caching = 'none'
  var match = document.cookie.match(
    /ssr-caching="cache,\s*desc=(\w+)(?:,\s*varnish=(\w+))?(?:,\s*dc,\s*desc=(\w+))?(?:"|;|$)/
  )
  if (!match && window.PerformanceServerTiming) {
    match = []
    var serverTiming = performance.getEntriesByType('navigation')[0]
      .serverTiming
    serverTiming.forEach(function(st) {
      switch (st.name) {
        case 'cache':
          match[1] = st.description
          break
        case 'varnish':
          match[2] = st.description
          break
        case 'dc':
          microPop = st.description
      }
    })
  }
  if (match && match.length) {
    caching = match[1] + ',' + (match[2] || 'none')
    if (!microPop) {
      microPop = match[3]
    }
  }
  wixBiSession.caching = caching
  wixBiSession.isCached = caching.indexOf('hit') === 0
  if (microPop) {
    wixBiSession.microPop = microPop
  }
})()

wixBiSession.sendBeat(1, 'Init')
