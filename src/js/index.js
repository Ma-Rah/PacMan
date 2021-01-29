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
  moveRight() {
    this.xPos++
  }
  updateX() {
    this.pacMan.style.left = this.xPos * TILE_SIZE + 'px';
    // this.mouth();
    // console.log(mouth);
  }
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

// Right arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    console.log(e)
    pacman.moveRight();
    pacman.updateX();
    pacMan.classList.add('pacman--right')
    pacMan.classList.toggle('pacman--closed')
  } else {
    pacMan.classList.remove('pacman--right')
  }
});
// Left Arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    console.log(e)
    xpos--
    pacMan.style.left = (xpos * TILE_SIZE) + 'px';
    pacMan.classList.add('pacman--left')
    pacMan.classList.toggle('pacman--closed')
  } else {
    pacMan.classList.remove('pacman--left')
  }
});

//  down arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 40) {
    console.log(e)
    ypos++
    pacMan.style.top = (ypos * TILE_SIZE) + 'px';
    pacMan.classList.add('pacman--down')
    pacMan.classList.toggle('pacman--closed')
  } else {
    pacMan.classList.remove('pacman--down')
  }
});

// up arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 38) {
    console.log(e)
    ypos--
    pacMan.style.top = (ypos * TILE_SIZE) + 'px';
    pacMan.classList.add('pacman--up')
    pacMan.classList.toggle('pacman--closed')
  } else {
    pacMan.classList.remove('pacman--up')
  }
});