import Snake from "./snake.js";
import Apple from "./apple.js";

const canvas = document.querySelector("#canvas");
const canvasContext = canvas.getContext("2d");

const snake = new Snake(20, 20, 20);
let apple = new Apple(snake);

const startGame = () => {
  canvasContext.font = "20px Arial";
  setInterval(show, 1000 / 15);
};

const show = () => {
  update();
  draw();
};

const update = () => {
  snake.move();
  eatApple();
  checkHitWall();
};

const checkHitWall = () => {
  const head = snake.getHead();
  if (head.x == -snake.size) {
    head.x = canvas.width - snake.size;
  } else if (head.x == canvas.width) {
    head.x = 0;
  } else if (head.y == -snake.size) {
    head.y = canvas.height - snake.size;
  } else if (head.y == canvas.height) {
    head.y = 0;
  }
};

const eatApple = () => {
  if (snake.getHead().x == apple.x && snake.getHead().y == apple.y) {
    snake.addTail({ x: apple.x, y: apple.y });
    apple = new Apple(snake);
  }
};

const createScore = () => {
  canvasContext.fillStyle = "#00FF42";
  canvasContext.fillText("Score:" + snake.tail.length, canvas.width - 120, 18);
};

const draw = () => {
  createRect(0, 0, canvas.width, canvas.height, "black");

  for (const tail of snake.tail) {
    createRect(
      tail.x + 2.5,
      tail.y + 2.5,
      snake.size - 5,
      snake.size - 5,
      "white"
    );
  }

  createScore();
  createRect(apple.x, apple.y, apple.size, apple.size, apple.color);
};

const createRect = (x, y, width, height, color) => {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
};

window.onload = () => {
  startGame();
};

window.addEventListener("keydown", ({ keyCode }) => {
  if (keyCode == 37 && snake.rotateX != 1) {
    snake.rotateX = -1;
    snake.rotateY = 0;
  } else if (keyCode == 38 && snake.rotateY != 1) {
    snake.rotateX = 0;
    snake.rotateY = -1;
  } else if (keyCode == 39 && snake.rotateX != -1) {
    snake.rotateX = 1;
    snake.rotateY = 0;
  } else if (keyCode == 40 && snake.rotateY != -1) {
    snake.rotateX = 0;
    snake.rotateY = 1;
  }
});
