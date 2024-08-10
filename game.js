const SNAKE_SPEED = 5;

const gameBoard = document.getElementById('game-board');
let is_start = true;
let thread = 0;
let game; 

const main = (event) => {
    // 两种监听事件：分为开始游戏和重置游戏
    if ((event.key === 'Enter' && thread === 0 && is_start === true) || 
        event.key === 'r' && thread === 0 && is_start ===false
    ) { 
            thread = 1;
            if(is_start === false){
               restartpos();
            }
            is_start = true;
            document.getElementById('start').style.display = 'none';
            //按自定义游戏速度调用函数
            game = setInterval(gamestart, 1000 / SNAKE_SPEED);
            alert("Game started!");
    }
};

const gamestart = () => {
    update();
    draw();
    check_islose();
    // TODO 4.3, 4.4: Add Game Over Alert, and clear interval!
    if (is_start === false) {
        alert("Game Over!");
        clearInterval(game);
        thread = 0;
        alert("please press 'R' to restart!");
      //  document.addEventListener('keydown', main);
    }
};

//更新状态
const update = () => {
    console.log('Updating');
    updateSnake();
    updateFood();
    // TODO 4.2: Update Game State
};

//绘图
const draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
};

// 加个监听事件，检测玩家键盘输入
document.addEventListener('keydown', main);

