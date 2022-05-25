class Player 
{
  constructor(width, height, speed, size, lives) 
  {
    this.diameter = size;
    this.speed = speed;
    this.lives = lives;
    this.startingLives = lives;
    this.posX = width - this.diameter * this.lives;
    this.posY = height / 2 - this.radius();
    this.score = 0;
  }

  update() 
  {
    //just updates the position in case the window has changed size
    let startingSize = this.diameter * this.startingLives;
    let size = this.diameter * this.lives;

    //keycode 87 is the "W" key, so when pressed it moves the player up, that is cause the y-axis in js goes downward
    if(keyIsDown(87)) 
    {
      this.posY -= this.speed;
    }
    //keycode 83 is the "S" key, when pressed move down, the higher the y-value the lower it goes
    if(keyIsDown(83)) 
    {
      this.posY += this.speed;
    }

/*     //when colission is true take a life
    this.isDead(); */

    // Playerspeed is dependent on the size
    this.speed = map(this.lives, 1, this.startingLives, 30, 5);
    this.posX = Math.min(Math.max(this.posX, 0 + size), width - size);
    this.posY = Math.min(Math.max(this.posY, 0 + size), height - size);
  }

  //displaying of player
  show() 
  {
    push();
    // fill(157, 78, 221);
    //noFill();
    stroke(30);
    strokeWeight(this.lives * 2);
    circle(this.posX, this.posY, this.diameter);
    fill(0)
    textSize(20)
    noStroke()
    text(this.lives,this.posX + this.diameter,this.posY - this.diameter)
    pop();
  }

  //collision detection
  collision(enemy) 
  {
    if(dist(enemy.x, enemy.y, this.posX, this.posY) <= this.radius() * this.lives) 
    {
      this.lives--;
      background(0);
      Enemy.list.splice(Enemy.list.indexOf(enemy), 1);


      return true;
    } 
    else 
    {
      return false;
    }
  }

  isDead() 
  {
    if(this.lives <= 0) 
    {
      return true;
    }
    else 
    {
      return false;
    }
  }

  radius() 
  {
    return this.diameter / 2;
  }
}
