const GRID_SIZE = 21;

//检测此位置在不在蛇身体上
const onSnake = (position) => {
  for (let i = 0; i < snakeBody.length; i++) {
    if (equalPositions(position, snakeBody[i])) {
      return true;
    }
  }
  return false;
};

const equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};
// 重置蛇，食物的出生位置，以及蛇运动的初始方向
const restartpos = () => {
  snakeBody = [
   { x: 11, y: 11 },
   { x: 11, y: 10 },
   { x: 11, y: 9 },
 ];
  food = getNewFoodPosition();
  now_snake_direction = {x: 0, y: 1};
  inputDirection = { x: 0, y: 1 };
}
//蛇变长
const growSnake = () => {
  snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
};

//获取食物位置
const getNewFoodPosition = () => {
  let randomFoodPosition = randomGridPosition();
  while (onSnake(randomFoodPosition)) {
    randomFoodPosition = randomGridPosition();
  }
  return randomFoodPosition;
};

const randomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
};

//检测是否出界
const outOfBounds = (position) => {
    return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}
const snakeOutOfBounds = () => {
    return outOfBounds(snakeBody[0]);
}
//检测是否撞到自己
const snakeIntersectSelf = () => {
    for (let i = 1; i < snakeBody.length; i++) {
        if (equalPositions(snakeBody[0], snakeBody[i])) {
            return true;
        }
    }
    return false;
}
//检测游戏有没有结束
const check_islose = () => {
    if(snakeOutOfBounds() || snakeIntersectSelf()) {
       is_start = false;
    }
}