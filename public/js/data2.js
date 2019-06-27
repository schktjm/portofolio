;(function(x, e, o, s, n) {
  var a = window.fedops || {}
  a.apps = a.apps || {}
  a.apps[x] = { startLoadTime: e && e.now && e.now() }
  try {
    a.sessionId = o.getItem('fedops.logger.sessionId')
  } catch (x) {}
  a.sessionId = a.sessionId || wixBiSession.viewerSessionId
  window.fedops = a
  var d =
    '//frog.wix.com/bolt-performance?appName=' +
    x +
    '&src=72&evid=21' +
    '&dc=208' +
    '&is_rollout=' +
    wixBiSession.is_rollout +
    '&st=2' +
    '&isp=0' +
    '&session_id=' +
    a.sessionId +
    '&_=' +
    s()
  wixBiSession.sendBeacon(d)
})(
  'bolt-viewer',
  window.performance,
  window.localStorage,
  Math.random,
  window.navigator
)
