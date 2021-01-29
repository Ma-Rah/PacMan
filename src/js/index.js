'use strict';


console.log('it works!');
const pacMan = document.querySelector('.entity--pac')


let xpos = 0;
let ypos = 0;
const TILE_SIZE = 85;

class Pacman {
  constructor(xPos, yPos, mouth, pacMan) {
    this.pacMan = pacMan;
    this.xPos = xPos;
    this.yPos = yPos;
    this.mouth = mouth;
  }
  // moveRight() {
  //   this.xPos++
  // }

  // moveLeft() {
  //   this.xPos--
  // }

  move() {
    this.pacMan.classList.remove('pacman--right')
    this.pacMan.classList.remove('pacman--left')
    this.pacMan.classList.remove('pacman--down')
    this.pacMan.classList.remove('pacman--up')
    if (direction === 'right') {
      this.xPos++
      this.pacMan.classList.add('pacman--right')
    } else if (direction === 'left') {
      this.xPos--
      this.pacMan.classList.add('pacman--left')
    } else if (direction === 'down') {
      this.yPos++
      this.pacMan.classList.add('pacman--down')
    } else if (direction === 'up') {
      this.yPos--
      this.pacMan.classList.add('pacman--up')
    } else {
      console.log('nothing')
    }
  }

  update() {
    this.pacMan.classList.toggle('pacman--closed')
    if (direction === 'right' || direction === 'left') {
      this.pacMan.style.left = this.xPos * TILE_SIZE + 'px';
    } else if (direction === 'up' || direction === 'down') {
      this.pacMan.style.top = this.yPos * TILE_SIZE + 'px';
    } else {
      console.log('notup')
    }
    // this.mouth();
    // console.log(mouth);
  }

  // mouth() {
  //   this.pacman.classList.toggle('pacman--closed')
  // }

  // mouth() { 
  //   if (this.mouth === true) { 
  //     this.mouth = false;
  //     // this.pacman.classList.toggle('pacman--closed')
  //   } else { 
  //     this.mouth = true
  //   }
  // }
}

const pacman = new Pacman(0, 0, true, pacMan);



// Toggle direction
let direction = 'right'
// Right arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    console.log(e)
    direction = 'right'
    pacman.move();
    pacman.update();
  } else {
    console.log('no animation')
  }
});
// Left Arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    console.log(e)
    direction = 'left'
    pacman.move();
    pacman.update();
    console.log(direction)
  } else {
    console.log('no animation')
  }
});

//  down arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 40) {
    direction = 'down'
    pacman.move();
    pacman.update();
  } else {
    console.log('no animation')
  }
});

// up arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 38) {
    direction = 'up'
    pacman.move();
    pacman.update();
  } else {
    console.log('no animation')
  }
});