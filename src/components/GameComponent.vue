<template>
    <v-app>
    <v-container>
        <v-switch @click="soundMuted()"
                :label="`Mute: ${mute.toString()}`"
                v-model="mute"
        ></v-switch>
        <div id="game"></div>
        <v-layout>
            <div style="text-align:center;width:480px;">
                <v-btn @mousedown="moveup()" @mouseup="clearmove()" @touchstart="moveup()">UP</v-btn><br><br>
                <v-btn @mousedown="moveleft()" @mouseup="clearmove()" @touchstart="moveleft()">LEFT</v-btn>
                <v-btn @mousedown="moveright()" @mouseup="clearmove()" @touchstart="moveright()">RIGHT</v-btn><br><br>
                <v-btn @mousedown="movedown()" @mouseup="clearmove()" @touchstart="movedown()">DOWN</v-btn>
            </div>
            <v-btn v-if="youLost" @mouseup="btnReset()" color="warning">RESTART</v-btn>
        </v-layout>
    </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      myGameArea: {
        canvas: document.createElement('canvas'),
        start: function () {
          this.youLost = false
          this.canvas.width = 480
          this.canvas.height = 270
          this.context = this.canvas.getContext('2d')
          document.getElementById('game').appendChild(this.canvas)
          this.frameNo = 0
        },
        clear: function () {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        },
        stop: function () {
          clearInterval(this.interval)
        }
      },
      myGamePiece: '',
      myObstacles: [],
      myScore: '',
      youLost: false,
      music: new Audio('./static/sound/1.mp3'),
      mute: false
    }
  },
  methods: {
    startGame () {
      this.music.play()
      this.myGameArea.start()
      this.myGamePiece = new this.Component(30, 30, 'blue', 10, 120, this.myGameArea.context)
      this.myScore = new this.Component('30px', 'Consolas', 'black', 280, 40, this.myGameArea.context, 'text')
    },
    Component (width, height, color, x, y, ctx, type) {
      this.type = type
      this.width = width
      this.height = height
      this.speedX = 0
      this.speedY = 0
      this.x = x
      this.y = y
      this.update = function () {
        if (this.type === 'text') {
          ctx.font = this.width + ' ' + this.height
          ctx.fillStyle = color
          ctx.fillText(this.text, this.x, this.y)
        } else {
          ctx.fillStyle = color
          ctx.fillRect(this.x, this.y, this.width, this.height)
        }
      }
      this.newPos = function () {
        this.x += this.speedX
        this.y += this.speedY
      }
      this.crashWith = function (otherobj) {
        var myleft = this.x
        var myright = this.x + (this.width)
        var mytop = this.y
        var mybottom = this.y + (this.height)
        var otherleft = otherobj.x
        var otherright = otherobj.x + (otherobj.width)
        var othertop = otherobj.y
        var otherbottom = otherobj.y + (otherobj.height)
        var crash = true
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
          crash = false
        }
        return crash
      }
    },
    updateGameArea () {
      var x, height, gap, minHeight, maxHeight, minGap, maxGap
      for (var i = 0; i < this.myObstacles.length; i += 1) {
        if (this.myGamePiece.crashWith(this.myObstacles[i])) {
          this.myGameArea.stop()
          this.youLost = true
          this.music.load()
          x = height = gap = minHeight = maxHeight = minGap = maxGap = ''
          return
        }
      }
      this.myGameArea.clear()
      this.myGameArea.frameNo += 1
      if (this.myGameArea.frameNo === 1 || this.everyinterval(150)) {
        x = this.myGameArea.canvas.width
        minHeight = 20
        maxHeight = 200
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
        minGap = 50
        maxGap = 200
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)
        this.myObstacles.push(new this.Component(10, height, 'green', x, 0, this.myGameArea.context))
        this.myObstacles.push(new this.Component(10, x - height - gap, 'green', x, height + gap, this.myGameArea.context))
      }
      for (i = 0; i < this.myObstacles.length; i += 1) {
        this.myObstacles[i].speedX = -1
        this.myObstacles[i].newPos()
        this.myObstacles[i].update()
      }
      this.myScore.text = 'SCORE: ' + this.myGameArea.frameNo
      this.myScore.update()
      this.myGamePiece.newPos()
      this.myGamePiece.update()
    },
    btnReset () {
      clearInterval(this.updateGameArea)
      this.youLost = false
      this.myGameArea.stop()
      this.myGameArea.clear()
      this.myGamePiece = ''
      this.myGameArea.frameNo = 1
      this.myObstacles = []
      this.myScore = ''
      this.music.load()
      this.everyinterval(0)
      this.startGame()
    },
    everyinterval (n) {
      if ((this.myGameArea.frameNo / n) % 1 === 0) { return true }
      return false
    },
    moveup () {
      this.myGamePiece.speedY = -1
    },
    movedown () {
      this.myGamePiece.speedY = 1
    },
    moveleft () {
      this.myGamePiece.speedX = -1
    },
    moveright () {
      this.myGamePiece.speedX = 1
    },
    clearmove () {
      this.myGamePiece.speedX = 0
      this.myGamePiece.speedY = 0
    },
    soundMuted () {
      this.music.muted = !this.music.muted
      this.mute = !this.mute
    }
  },
  mounted () {
    this.startGame()
    setInterval(this.updateGameArea, 20)
  }
}
</script>