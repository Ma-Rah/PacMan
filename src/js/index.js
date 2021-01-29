'use strict';


console.log('it works!');
const pacMan = document.querySelector('.entity--pac')

class Pacman {
  constructor
}

// console.log()
let xpos = 0
let ypos = 0
const TILE_SIZE = 85

// Toggle direction

// Right arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    xpos++
    pacMan.style.left = (xpos * TILE_SIZE) + 'px';
    pacMan.classList.add('pacman--right')
    pacMan.classList.toggle('pacman--closed')
  } else {
    pacMan.classList.remove('pacman--right')
  }
});
// Left Arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
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
    ypos++
    pacMan.style.top = (ypos * TILE_SIZE) + 'px';
    pacMan.classList.add('pacman--up')
    pacMan.classList.toggle('pacman--closed')
  } else {
    pacMan.classList.remove('pacman--up')
  }
});