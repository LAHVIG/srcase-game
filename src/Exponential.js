class Exponential extends Enemy
{
  constructor(size, speed)
  {
    super(size, speed);
    this.a = pow(this.y1 / this.y2, 1 / (this.x1 - this.x2));
    this.b = this.y1 / pow(this.a, this.x1);

    Enemy.list.push(this);
  }
  
  update()
  {
    this.y = this.b * pow(this.a, this.x)
    this.x += this.speed;
  }
}