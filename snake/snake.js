export default class Snake {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.tail = [{ x: this.x, y: this.y }];
    this.rotateX = 0;
    this.rotateY = 1;
  }

  move() {
    let newRect;

    if (this.rotateX == 1) {
      newRect = {
        x: this.getHead().x + this.size,
        y: this.getHead().y,
      };
    } else if (this.rotateX == -1) {
      newRect = {
        x: this.getHead().x - this.size,
        y: this.getHead().y,
      };
    } else if (this.rotateY == 1) {
      newRect = {
        x: this.getHead().x,
        y: this.getHead().y + this.size,
      };
    } else if (this.rotateY == -1) {
      newRect = {
        x: this.getHead().x,
        y: this.getHead().y - this.size,
      };
    }

    this.tail.shift();
    this.tail.push(newRect);
  }

  getHead() {
    return this.tail[this.tail.length - 1];
  }

  addTail(tail) {
    this.tail.push(tail);
  }
}
