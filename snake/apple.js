export default class Apple {
  constructor(snake) {
    let touching;

    while (true) {
      touching = false;
      this.x =
        Math.floor((Math.random() * canvas.width) / snake.size) * snake.size;
      this.y =
        Math.floor((Math.random() * canvas.height) / snake.size) * snake.size;

      for (const tail of snake.tail) {
        if (this.x == tail.x && this.y == tail.y) {
          touching = true;
        }
      }

      this.color = "pink";
      this.size = snake.size;

      if (!touching) {
        break;
      }
    }
  }
}
