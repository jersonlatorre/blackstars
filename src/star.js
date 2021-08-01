class Star {
  constructor() {
    this.x = random(Global.xFactor)
    this.y = random(1920)
    this.maxSize = random(1, 8)
    this.speed = random(0.5, 2)
    this.seed = random(100)
    this.twinkleSpeed = random(1, 4)
  }

  draw() {
    let size = this.maxSize * sin(Global.time * this.twinkleSpeed + this.seed)
    let speedFactor = map(easeJump(Global.t), 0, 1, 1, 15)
    
    this.x += this.speed * speedFactor

    if (this.x > Global.xFactor) {
      this.x -= Global.xFactor
    }

    ellipse(this.x, this.y, size * speedFactor, size / speedFactor)
  }
}
