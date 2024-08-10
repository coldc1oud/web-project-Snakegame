let snakeBody = [
  { x: 11, y: 11 },
  { x: 11, y: 10 },
  { x: 11, y: 9 },
];


//蛇当前的位置
let now_snake_direction = {x: 0, y: 1};

//更新蛇的状态
const updateSnake = () => {
  // Remove tail segment
  snakeBody.pop();

  // Add new head segment
  const newHead = { ...snakeBody[0] };
  now_snake_direction = getInputDirection();

  newHead.x += now_snake_direction.x;
  newHead.y += now_snake_direction.y;

  snakeBody.unshift(newHead);
};

// Don't change this function!
const drawSnake = (gameBoard) => {
  for (let i = 0; i < snakeBody.length; i++) {
    const segment = snakeBody[i];
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  }
};
