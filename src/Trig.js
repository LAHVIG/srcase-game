class Trig extends Enemy {
  constructor(size, speed) {
    super(size, speed);

    this.bAr = [5, 10];
    this.a = random(-height / 2, height / 2);
    this.b = this.bAr[int(random(0, 1))];

    Enemy.list.push(this);
  }

  update() {
    this.d = this.y2 - this.a * sin(this.b * (this.x2 - this.diameter/2));

    this.y = this.a * sin(this.b * (this.x)) + this.d;
    this.x += this.speed;
  }
}