<template>
    <v-container>
            <div id="content">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <canvas id="example" height=450 width=300></canvas>
            </div>
    </v-container>

</template>
<style media="screen">canvas{border:1px solid #ccc}</style>
<script>
  // prèviament he fet un npm install jquery
  import $ from 'jquery'
  export default {
    name: 'Paint',
    data () {
      return {
        paintWithClick: false,
        CanvasDrawr: function (options) {
          var canvas, lines, offset, self, id, colors, ctxt, mycolor
          canvas = document.getElementById(options.id)
          ctxt = canvas.getContext('2d')
          canvas.style.width = '100%'
          canvas.width = canvas.offsetWidth
          canvas.style.width = ''
          ctxt.lineWidth = options.size || Math.ceil(Math.random() * 35)
          ctxt.lineCap = options.lineCap || 'round'
          ctxt.pX = undefined
          ctxt.pY = undefined
          lines = []
          offset = $(canvas).offset()
          self = {init: function () {
            canvas.addEventListener('touchstart', self.preDraw, false)
            canvas.addEventListener('mousedown', self.preDrawClick, false)
            canvas.addEventListener('mouseup', self.stopDrawClick, false)
            canvas.addEventListener('touchmove', self.draw, false)
            canvas.addEventListener('mousemove', self.drawClick, false)
          },
          preDraw: function (event) {
            console.log(event)
            $.each(event.touches, function (i, touch) {
              id = touch.identifier
              colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'orangered']
              mycolor = colors[Math.floor(Math.random() * colors.length)]
              lines[id] = {x: this.pageX - offset.left, y: this.pageY - offset.top, color: mycolor}
            })
            event.preventDefault()
          },
          draw: function (event) {
            var id, ret, moveX, moveY
            $.each(event.touches, function (i, touch) {
              id = touch.identifier
              moveX = this.pageX - offset.left - lines[id].x
              moveY = this.pageY - offset.top - lines[id].y
              ret = self.move(id, moveX, moveY)
              lines[id].x = ret.x
              lines[id].y = ret.y
            })
            event.preventDefault()
          },
          preDrawClick: function (event) {
            this.paintWithClick = true
            colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'orangered']
            mycolor = colors[Math.floor(Math.random() * colors.length)]
            lines = {x: event.pageX - offset.left, y: event.pageY - offset.top, color: mycolor}
            event.preventDefault()
          },
          drawClick: function (event) {
            if (this.paintWithClick) {
              var ret, moveX, moveY
              moveX = event.pageX - offset.left - lines.x
              moveY = event.pageY - offset.top - lines.y
              ret = self.moveClick(moveX, moveY)
              lines.x = ret.x
              lines.y = ret.y
              event.preventDefault()
            }
          },
          stopDrawClick: function () {
            this.paintWithClick = false
          },
          move: function (i, changeX, changeY) {
            ctxt.strokeStyle = lines[i].color
            ctxt.beginPath()
            ctxt.moveTo(lines[i].x, lines[i].y)
            ctxt.lineTo(lines[i].x + changeX, lines[i].y + changeY)
            ctxt.stroke()
            ctxt.closePath()
            return {x: lines[i].x + changeX, y: lines[i].y + changeY}
          },
          moveClick: function (changeX, changeY) {
            ctxt.strokeStyle = lines.color
            ctxt.beginPath()
            ctxt.moveTo(lines.x, lines.y)
            ctxt.lineTo(lines.x + changeX, lines.y + changeY)
            ctxt.stroke()
            ctxt.closePath()
            return {x: lines.x + changeX, y: lines.y + changeY}
          }
          }
          return self.init()
        }
      }
    },
    mounted () {
      this.CanvasDrawr({id: 'example', size: 15})
    }
}
</script>
