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
    this.elements = []
    this.element = this._render()
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

  //   collisionDetection(x, y) {
  //     if ()
  //   }
}

class Pacman {
  constructor(xPos, yPos, parent) {
    this.pacMan = this.render();
    this.xPos = xPos;
    this.yPos = yPos;
    this.parent = parent;
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
  constructor(x, y, parent, type) {
    this.x = x
    this.y = y
    this.type = type
    this.parent = parent
    console.log(x, y)
    console.log(this.parent)
    console.log(this.render())
    console.log(this.parent.element)
    this.parent.element.appendChild(this.render())
  }

  render() {
    console.log(this.type)
    const entityWall = document.createElement('div');
    entityWall.className = 'entity entity--wall'; // add classes and delete innerHTML
    // this.entityX(Math.floor(Math.random) * newStage.width)
    entityWall.style.left = this.x * TILE_SIZE + 'px';
    entityWall.style.top = this.y * TILE_SIZE + 'px';

    this.parent.elements.push(this)
    return entityWall;
  }

  mount(parent) {
    this.element = this.render()
    parent.appendChild(this.element)
  }
}
const newStage = new Stage(10, 10)
const newEntity = new Entity(1, 1, newStage)
const pacman = new Pacman(0, 0, newStage);
const newEntityTwo = new Entity(4, 5, newStage)




newStage.mount(document.querySelector(".container"));
pacman.mount(document.querySelector(".stage"));
newEntity.mount(document.querySelector(".stage"));
newEntityTwo.mount(document.querySelector(".stage"));