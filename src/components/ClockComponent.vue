<template>
   <div>

       <canvas id="canvas" width="400" height="400" style="background-color:#333"></canvas>

   </div>
</template>

<style scoped>
    div {
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>

<script>
export default {
  name: 'Clock',
  data () {
    return {
      data: 'example'
    }
  },
  mounted () {
    var visibilityChange
    //    Aquests if serveix per si s'utitliza els diferents navegadors, per veure si ho suporta i poder aplicar la funció per pintar el rellotge.
    if (typeof document.hidden !== 'undefined') {
      visibilityChange = 'visibilitychange'
    } else if (typeof document.mozHidden !== 'undefined') {
      visibilityChange = 'mozvisibilitychange'
    } else if (typeof document.msHidden !== 'undefined') {
      visibilityChange = 'msvisibilitychange'
    } else if (typeof document.webkitHidden !== 'undefined') {
      visibilityChange = 'webkitvisibilitychange'
    } else {
      console.log('Aquest navegador no suporta document.hidden')
    }
    document.addEventListener(visibilityChange, iniciRellotge, false)
    let w

    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var radius = canvas.height / 2
    ctx.translate(radius, radius)
    radius = radius * 0.90

    //    let fps = 15
    //  inicialment, s'ha de cridar a la funció iniciRellotge, ja que sinó no ens apareixerà el rellotge fins que no canviessim de pantalla i tornessim a multimedia/clock.
    iniciRellotge()

    function iniciRellotge () {
      if (!document.hidden) {
        if (typeof (Worker) !== 'undefined') {
          if (typeof (w) === 'undefined') {
            w = new Worker('static/workers/timer.js')
          }
          w.onmessage = function (event) {
            drawClock()
          }
        }
      }
    }
    function drawClock () {
      window.requestAnimationFrame(drawClock)
      drawFace(ctx, radius)
      drawNumbers(ctx, radius)
      drawTime(ctx, radius)
    }

    function drawFace (ctx, radius) {
      var grad
      ctx.beginPath()
      ctx.arc(0, 0, radius, 0, 2 * Math.PI)
      ctx.fillStyle = 'white'
      ctx.fill()
      grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05)
      grad.addColorStop(0, '#333')
      grad.addColorStop(0.5, 'white')
      grad.addColorStop(1, '#333')
      ctx.strokeStyle = grad
      ctx.lineWidth = radius * 0.1
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI)
      ctx.fillStyle = '#333'
      ctx.fill()
    }
    function drawNumbers (ctx, radius) {
      var ang
      var num
      ctx.font = radius * 0.15 + 'px arial'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6
        ctx.rotate(ang)
        ctx.translate(0, -radius * 0.85)
        ctx.rotate(-ang)
        ctx.fillText(num.toString(), 0, 0)
        ctx.rotate(ang)
        ctx.translate(0, radius * 0.85)
        ctx.rotate(-ang)
      }
    }

    function drawTime (ctx, radius) {
      var now = new Date()
      var hour = now.getHours()
      var minute = now.getMinutes()
      var second = now.getSeconds()

      hour = hour % 12
      hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60))
      drawHand(ctx, hour, radius * 0.5, radius * 0.07)

      minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60))
      drawHand(ctx, minute, radius * 0.8, radius * 0.07)
      // second
      second = (second * Math.PI / 30)
      drawHand(ctx, second, radius * 0.9, radius * 0.02)
    }

    function drawHand (ctx, pos, length, width) {
      ctx.beginPath()
      ctx.lineWidth = width
      ctx.lineCap = 'round'
      ctx.moveTo(0, 0)
      ctx.rotate(pos)
      ctx.lineTo(0, -length)
      ctx.stroke()
      ctx.rotate(-pos)
    }
  }
}
</script>