'use strict';

const pacMan = document.querySelector('.entity--pac')

let xpos = 0;
let ypos = 0;
const TILE_SIZE = 85;
let direction = 'right'

class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  _render() {
    const stageElem = document.createElement('div');
    stageElem.innerHTML = `
<div id="app" class="stage"></div>`

    return stageElem;
  }
  mount(parent) {
    this.element = this._render()
    parent.appendChild(this.element)
  }
}

const target = document.querySelector('body')
const newStage = new Stage()
newStage.mount(target)

class Pacman {
  constructor(xPos, yPos, mouth, pacMan) {
    this.pacMan = pacMan
    this.xPos = xPos;
    this.yPos = yPos;
    this.mouth = mouth;
  }
  render() {
    const pacElm = document.createElement('div');
    pacElm.innerHTML = `
    <div class="entity entity--pac pacboy-active-light"></div>
    `
    return pacElm;

    //adding event listeners

  }
  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
  }
  reset() {
    this.pacMan.classList.remove('pacman--right')
    this.pacMan.classList.remove('pacman--left')
    this.pacMan.classList.remove('pacman--down')
    this.pacMan.classList.remove('pacman--up')
  }


  move() {
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
  }
}

const pacman = new Pacman(0, 0, true, pacMan);
pacman.mount(document.querySelector("#app"));

// Right arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 39) {
    console.log(e)
    direction = 'right'
    pacman.reset();
    pacman.move();
    pacman.update();
  }
});
// Left Arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    console.log(e)
    direction = 'left'
    pacman.move();
    pacman.update();
  }
});

//  down arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 40) {
    direction = 'down'
    pacman.move();
    pacman.update();
  }
});

// up arrow
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 38) {
    direction = 'up'
    pacman.move();
    pacman.update();
  }
});