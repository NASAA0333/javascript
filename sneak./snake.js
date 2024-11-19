var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var grid = 16;
var count = 0;

var snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4,
};

var apple = {
  x: 320,
  y: 320,
};

const MAX_LENGTH = 20; // Set maximum length limit

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
  requestAnimationFrame(loop);

  if (++count < 4) {
    return;
  }

  count = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);

  snake.x += snake.dx;
  snake.y += snake.dy;

  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  snake.cells.unshift({ x: snake.x, y: snake.y });

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // Draw apple
  context.fillStyle = "red";
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  // Draw snake
  context.fillStyle = "green";
  snake.cells.forEach(function (cell, index) {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    // Check if snake eats apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;

      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    // Check for self-collision
    for (var i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        gameOver();
      }
    }
  });

  // Check if max length is reached
  if (snake.maxCells >= MAX_LENGTH) {
    gameOver();
  }
}

function gameOver() {
  document.getElementById("gameOverMessage").style.display = "block";
  document.getElementById("restartBtn").style.display = "block"; // Show restart button
}

function resetGame() {
  snake.x = 160;
  snake.y = 160;
  snake.cells = [];
  snake.maxCells = 4;
  snake.dx = grid;
  snake.dy = 0;

  apple.x = getRandomInt(0, 25) * grid;
  apple.y = getRandomInt(0, 25) * grid;

  document.getElementById("gameOverMessage").style.display = "none"; // Hide game over message
  document.getElementById("restartBtn").style.display = "none"; // Hide restart button
}

document.getElementById("restartBtn").addEventListener("click", function () {
  resetGame(); // Reset game on button click
});

document.addEventListener("keydown", function (e) {
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  } else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  } else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  } else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

requestAnimationFrame(loop);
