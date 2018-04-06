let i = 0
function timedCount () {
  postMessage(i++)
  setTimeout(timedCount, 1000)
}

timedCount()
