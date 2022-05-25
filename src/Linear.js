class Linear extends Enemy
{
  constructor(size, speed)
  {
    super(size, speed);

    this.a = (this.y1 - this.y2)/(this.x1 - this.x2);
    this.b = this.y1;

    Enemy.list.push(this);
  }

  update()
  {
    this.y = this.a * this.x + this.b;
    this.x += this.speed;
  }
}
