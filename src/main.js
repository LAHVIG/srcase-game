const size = 30;

//let enemies = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player(width, height, 10, size, 5);
  frameRate(60);

  // requires a size, type and speed variables
  new Linear(size, 5);
  background(220);
}

function draw() {
  background(220);

  if (player.isDead()) 
  {
    background(255,0,0);
  } else {
    if (Enemy.list.length > 0) {
      Enemy.list.forEach( element => element.update());
      Enemy.list.forEach( element => element.show());
      Enemy.list.forEach( element => element.checkBounds());

      for (let i = 0; i < Enemy.list.length; i++) {
        player.collision(Enemy.list[i]);
      }
    }

    if (frameCount % 30 == 0) {
      switch(Math.floor(random(0, 100)) % 3) {
        case 0: {
          new Linear(size, 5);
          break;
        }
        case 1: {
          new Exponential(size, 5);
          break;
        }
        case 2: {
          new Trig(size, 5);
          break;
        }
        default: {
          new Linear(size, 5);
          break;
        } 
      }
    }
    player.update();
    player.show();
  }

  showUi(player, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
