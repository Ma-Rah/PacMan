'use strict';

console.log('it works!');
const pacMan = document.querySelector('.entity--pac')


// Toggle between open and closed mouth

// Right arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    console.log(e)
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
    pacMan.classList.add('pacman--up')
    pacMan.classList.toggle('pacman--closed')

  } else {
    pacMan.classList.remove('pacman--up')
  }
});