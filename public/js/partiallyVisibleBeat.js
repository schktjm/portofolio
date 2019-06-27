if (
  wixBiSession &&
  wixBiSession.sendBeat &&
  !wixBiSession.sentPartiallyVisibleBeat
) {
  wixBiSession.sentPartiallyVisibleBeat = true
  wixBiSession.sendBeat(12, 'Partially visible', '&pid=')
}
