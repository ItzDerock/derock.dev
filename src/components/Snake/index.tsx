import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { DEFAULT_STATE, HEIGHT, WIDTH } from "./constants";
import SnakeDisplay from "./Display";
import type { XY, Direction } from "./types";

export default function SnakeGame() {
  // snake states
  const [direction, setDirection] = createSignal<Direction>('up');
  const [snake, setSnake] = createSignal<XY[]>(DEFAULT_STATE);
  const [food, setFood] = createSignal<XY>([12, 10]);

  // game states
  const [gameStarted, setGameStarted] = createSignal<boolean>(false);
  const [gameOver, setGameOver] = createSignal<boolean>(false);

  // game stats
  const [highScore, setHighScore] = createSignal<number>(0);

  // get score
  const calcScore = () => snake().length - DEFAULT_STATE.length;

  // get highscore from localstorage
  onMount(() => {
    const highScore = localStorage.getItem('highScore');
    if(highScore) setHighScore(parseInt(highScore));
  });

  // set highscore to localstorage
  createEffect(() => {
    if(gameOver()) {
      const score = calcScore();
      if(score > parseInt(localStorage.getItem('highScore') || '0')) {
        setHighScore(score);
        localStorage.setItem('highScore', score.toString());
      }
    }
  });

  // reset
  const reset = () => {
    setDirection('up');
    setSnake(DEFAULT_STATE);
    setFood([12, 10]);
    setGameStarted(false);
    setGameOver(false);
  }

  // extra frame of death delay
  let deathDelay = 0;

  // store game loop interval
  let interval: number | null = null; 
  
  // actual game loop
  // start when gameStarted is true
  createEffect(() => {
    if(gameStarted()) {
      // clear old interval if it exists
      if(interval) clearInterval(interval);

      // start new interval
      interval = setInterval(() => {
        if(!gameStarted()) return;
    
        const snakeCopy = Array.from(snake()) as XY[];
        const snakeHead = Array.from(snakeCopy[0]) as XY;
    
        // process snake movement
        switch (direction()) {
          case 'up':
            snakeHead[1] -= 1;
            break;
          case 'down':
            snakeHead[1] += 1;
            break;
          case 'left':
            snakeHead[0] -= 1;
            break;
          case 'right':
            snakeHead[0] += 1;
            break;
        }
    
        // check if snake is out of bounds
        if(snakeHead[0] < 0 || snakeHead[0] >= WIDTH || snakeHead[1] < 0 || snakeHead[1] >= HEIGHT) {
          if(deathDelay === 0) {
            deathDelay = 1;
            return;
          }
    
          setGameOver(true);
          setGameStarted(false);
          return;
        }
    
        // check if snake has eaten food
        var grow = snakeHead[0] === food()[0] && snakeHead[1] === food()[1];
        
        // respawn food & increment score
        if(grow) {
          setFood([Math.floor(Math.random() * WIDTH), Math.floor(Math.random() * HEIGHT)]);
        }
    
        // // check if snake has eaten itself
        if(snakeCopy.some(([x, y]) => x === snakeHead[0] && y === snakeHead[1])) {
          setGameOver(true);
          setGameStarted(false);
          return;
        }
        
        // set the new snake head
        snakeCopy.unshift(snakeHead);
    
        // remove the tail if snake hasn't eaten food
        if(!grow) snakeCopy.pop();
    
        // update snake state
        setSnake(snakeCopy);
        deathDelay = 0;
      }, 100);
    } else {
      // clear interval on death
      if(interval) clearInterval(interval);
    }
  });

  // keyboard controls
  const moveDown = () => direction() != 'up' && setDirection('down');
  const moveUp = () => direction() != 'down' && setDirection('up');
  const moveLeft = () => direction() != 'right' && setDirection('left');
  const moveRight = () => direction() != 'left' && setDirection('right');

  // event listeners
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
      case 's':
        moveDown();
        break;
      
      case 'ArrowUp':
      case 'w':
        moveUp();
        break;

      case 'ArrowLeft':
      case 'a':
        moveLeft();
        break;
      
      case 'ArrowRight':
      case 'd':
        moveRight();
        break;

      default:
        return;
    }

    e.preventDefault();
  };
  
  // swipe controls
  let touchStartX = 0;
  let touchStartY = 0;
  let snakeGame: HTMLDivElement = null as any;

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;

    e.preventDefault();
  }

  const handleTouchEnd = (e: TouchEvent) => {
    const touch = e.changedTouches[0];
    
    const dX = touch.clientX - touchStartX;
    const dY = touch.clientY - touchStartY;

    if(Math.abs(dX) > Math.abs(dY)) {
      if(dX > 0) moveRight();
      else moveLeft();
    }
    else {
      if(dY > 0) moveDown();
      else moveUp();
    }

    e.preventDefault();
  }

  // register on game start
  createEffect(() => {
    if(isServer) return;

    if(gameStarted()) {
      // keyboard
      window.addEventListener('keydown', handleKeyDown);

      // swipe
      snakeGame.addEventListener('touchstart', handleTouchStart);
      snakeGame.addEventListener('touchend', handleTouchEnd);
    } else {
      // keyboard
      window.removeEventListener('keydown', handleKeyDown);

      // swipe
      snakeGame.removeEventListener('touchstart', handleTouchStart);
      snakeGame.removeEventListener('touchend', handleTouchEnd);
    }
  });

  // lifecycle
  onCleanup(() => {
    if(isServer) return;
    
    // stop game loop
    if(interval) clearInterval(interval);

    // keyboard
    !isServer && window.removeEventListener('keydown', handleKeyDown);

    // swipe
    snakeGame.removeEventListener('touchstart', handleTouchStart);
    snakeGame.removeEventListener('touchend', handleTouchEnd);
  });

  return (
    <div class="snake-gradient w-full py-4 xl:py-36 xl:px-16" ref={snakeGame}>
      <div class="border-black snake-box-gradient shadow-snakeWindow backdrop-blur-[32px] p-4 rounded-lg xl:w-fit w-full flex flex-col sm:flex-row mx-auto">
        <div class="mx-auto">
          <SnakeDisplay
            snake={snake}
            food={food}
            gameStarted={gameStarted}
            direction={direction}
            startGame={() => {
              reset();
              setGameStarted(true);
            }}
          />
        </div>

        <div class="mx-auto mt-4 md:mt-0 md:ml-4 float-right">
          <div class="bg-[#011423] bg-opacity-20 mx-2 p-3 rounded-lg w-fit">
            <p class="text-white whitespace-pre">
              // use keyboard <br />
              // or these buttons <br />
              // or swipe (mobile)
            </p>
            
            <div class="grid-cols-3 grid-rows-2 grid gap-1 mt-2">
              <div></div>
              <button class="snake-button bg-background border-line py-3 rounded-lg" onClick={moveUp} name="up">
                <svg class="m-auto" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z" fill="white" />
                </svg>
              </button>
              <div></div>
              <button class="snake-button bg-background border-line py-3 rounded-lg" onClick={moveLeft} name="left">
                <svg class="m-auto" width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.309143 4.5L6.30914 8.75V0.25L0.309143 4.5Z" fill="white" />
                </svg>
              </button>
              <button class="snake-button bg-background border-line py-3 rounded-lg" onClick={moveDown} name="down">
                <svg class="m-auto" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.50002 6.69086L0.25 0.690857H8.75003L4.50002 6.69086Z" fill="white" />
                </svg>
              </button>
              <button class="snake-button bg-background border-line py-3 rounded-lg" onClick={moveRight} name="right">
                <svg class="m-auto" width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.69086 4.5L0.690857 0.25V8.75L6.69086 4.5Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>

          <div class="mt-4 mx-2">
            <p class="text-white whitespace-pre">
              <span class="text-secondary-200">score</span> = {calcScore()} <br />
              <span class="text-secondary-200">highScore</span> = {highScore()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}