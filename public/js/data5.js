var requirejs = {
  onNodeCreated: function(node) {
    var src = node.getAttribute('src')
    var shouldIgnore = [
      'googletagmanager.com',
      'google-analytics.com',
      'googleadservices.com',
      'doubleclick.net',
      'connect.facebook.net'
    ].some(function(domain) {
      return src.indexOf(domain) !== -1
    })
    if (!shouldIgnore) {
      node.setAttribute('crossorigin', 'anonymous')
    }
  }
}
