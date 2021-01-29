'use strict';

const pacMan = document.querySelector('.entity--pac')

let xpos
let ypos
const TILE_SIZE = 85;
let direction

class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  _render() {
    const stageElem = document.createElement('div');
    stageElem.className = 'stage'; // add classes and delete innerHTML

    stageElem.style.width = this.width * TILE_SIZE + 'px';
    stageElem.style.height = this.height * TILE_SIZE + 'px';

    return stageElem;
  }
  mount(parent) {
    this.element = this._render()
    parent.appendChild(this.element)
  }
}

class Pacman {
  constructor(xPos, yPos, mouth) {
    this.pacMan = this.render();
    this.xPos = xPos;
    this.yPos = yPos;
    this.mouth = mouth;
  }
  render() {
    const pacElm = document.createElement('div');
    pacElm.className = 'entity entity--pac pacboy-active-light'

    // add event listeners
    // Right arrow

    document.addEventListener('keydown', (e) => {
      console.log('work')
      if (e.keyCode === 39) {
        console.log(e)
        direction = 'right'
        this.reset();
        this.move();
        this.update();
      }
    })

    // Left Arrow
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 37) {
        console.log(e)
        direction = 'left'
        this.reset();
        this.move();
        this.update();
      }
    });

    //  down arrow
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 40) {
        direction = 'down'
        this.reset();
        this.move();
        this.update();
      }
    });

    // up arrow
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 38) {
        direction = 'up'
        this.reset();
        this.move();
        this.update();
      }
    });

    return pacElm
  }
  mount(parent) {
    // this.element = this.render();
    parent.appendChild(this.pacMan);

  }
  reset() {
    this.pacMan.classList.remove('pacman--right')
    this.pacMan.classList.remove('pacman--left')
    this.pacMan.classList.remove('pacman--down')
    this.pacMan.classList.remove('pacman--up')
  }
  move() {

    if (direction === 'right') {
      if (pacman.xPos === newStage.width - 1) {
        return
      } else {
        this.xPos++
        this.pacMan.classList.add('pacman--right')
      }
    } else if (direction === 'left') {
      if (pacman.xPos === 0) {
        return
      }
      this.xPos--
      this.pacMan.classList.add('pacman--left')
    } else if (direction === 'down') {
      if (pacman.yPos === newStage.height - 1) {
        return
      }
      this.yPos++
      this.pacMan.classList.add('pacman--down')
    } else if (direction === 'up') {
      if (pacman.yPos === 0) {
        return
      }
      this.yPos--
      this.pacMan.classList.add('pacman--up')
    } else {
      console.log('nothing')
    }
  }
  update() {

    this.pacMan.classList.toggle('pacman--closed')
    if (direction === 'right' || direction === 'left') {
      console.log(this.xPos * TILE_SIZE + 'px')
      this.pacMan.style.left = this.xPos * TILE_SIZE + 'px';
    } else if (direction === 'up' || direction === 'down') {
      this.pacMan.style.top = this.yPos * TILE_SIZE + 'px';
    } else {
      console.log('notup')
    }
  }
}

class Entity {
  constructor(entityX, entityY, entityType) {
    this.entityX = entityX
    this.entityX = entityX
    this.entityType = entityType
  }

  render() {
    const entityElem = document.createElement('div');
    entityElem.className = 'entity__elem'; // add classes and delete innerHTML

    entityElem.style.width = TILE_SIZE + 'px';
    entityElem.style.height = TILE_SIZE + 'px';

    return entityElem;
  }
  mount(parent) {
    this.element = this.render()
    parent.appendChild(this.element)
  }
}

const pacman = new Pacman(0, 0, true);
const newStage = new Stage(10, 10)
const newEntity = new Entity(5, 5)

newStage.mount(document.querySelector(".container"));
pacman.mount(document.querySelector(".stage"));
newEntity.mount(document.querySelector(".stage"));