// 当前输入按键对应的方向
let inputDirection = { x: 0, y: 1 };

//玩家操控按键监听
window.addEventListener('keydown', (event) => {
  console.log(event.key);
  //这个地方貌似课程给的代码有点瑕疵，原本代码是
  //if (event.key === 'ArrowUp' && inputDirection.x !== 0) 这样的
  //但是在使用过程中会发现如果在两次update中间输入速度过快的话，会导致一些问题：
  //比如现在蛇的方向是朝右，按正常来说此时按下左键是没有反应的，但是如果此时快速的连续按下上或者下方向键后再次按左，就会导致蛇直接往左走
  //所以这个地方比较的方向状态应该是更新后的状态，而不是键盘的监听状态
      if (event.key === 'ArrowUp' && now_snake_direction.x !== 0) {
        inputDirection = { x: 0, y: -1 };
      } else if (event.key === 'ArrowDown' && now_snake_direction.x !== 0) {
        inputDirection = { x: 0, y: 1 };
      } else if (event.key === 'ArrowRight' && now_snake_direction.y !== 0) {
        inputDirection = { x: 1, y: 0 };
      } else if (event.key === 'ArrowLeft' && now_snake_direction.y !== 0) {
        inputDirection = { x: -1, y: 0 };
      }
  
});

const getInputDirection = () => {
  return inputDirection;
};
