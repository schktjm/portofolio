window.messageBuffer = []
window.messageHandler = function(event) {
  messageBuffer.push(event)
}
window.addEventListener('message', window.messageHandler, false)
