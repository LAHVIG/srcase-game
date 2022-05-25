class Enemy
{
  constructor(size, speed)
  {
    this.diameter = size + random(-10,20);
    this.speed = speed;

    this.x1 = 0 - this.diameter/2;
    this.x2 = width + this.diameter/2;
    this.x = this.x1;

    this.y1 = random(0 + this.diameter/2, height - this.diameter/2);
    this.y2 = random(0 + this.diameter/2, height - this.diameter/2);

    
  }

  show()
  {
    push();
    fill(123, 44, 191);
    circle(this.x, this.y, this.diameter);
    pop();
  }

  checkBounds() 
  {
    if(this.x > width + this.diameter / 2) {
      //checks when out of bounds, where object is in array and pops index
      Enemy.list.splice(Enemy.list.indexOf(this),1);

      if (!player.isDead()) 
          {
            switch(this.constructor.name) 
            {
              case 'Linear': {
                player.score += 100;
                break;
              }
              case 'Exponential': {
                player.score += 150;
                break;
              }
              case 'Trig': {
                player.score += 250;
                break;
              }
              default: break;
            }
          }
    }
  }

  static list = [];
}
