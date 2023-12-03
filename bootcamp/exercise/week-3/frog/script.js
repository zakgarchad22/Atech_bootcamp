const $timer = $("#timer")
const $gameContainer = $("#game-container")
const $level = $("#level")
const $countCatch = $("#countCatch")
const $startButton = $("#start-button")

let frogs = []
let level = 1
let frogCount = 0
let frogAppears = 0
let gameInterval
let count = 10
let size = 5
function GameInit() {
  clearInterval(gameInterval)
  frogs.forEach(($frog) => $frog.remove())
  level = 1
  frogAppears = 0
  $level.text(`Level ${level}`)
  frogCount = 0 
  $countCatch.text(`${frogAppears} Frogs left`)
  $timer.text(`0 Seconds left`)
  $startButton.text("Start")
  $startButton.prop("disabled", false)
}

const createFrog = () => {
    for (let i = 0; i < level; i++) {
      const x = Math.floor(Math.random() * ($gameContainer.width() - 50))
      const y = Math.floor(Math.random() * ($gameContainer.height() - 50))
      const size = 1 +  (y / $gameContainer.height());
      const $frog = $("<img>")
        .addClass("frog")
        .attr("src", "file:///C:/Users/a/Desktop/test/frog.svg")
        .css({
          left: x +  "px",
          top: y + "px",
          width: "30px", 
          height: "30px",
          transform: "scale(" + size + ")"
        })
        .on("click", () => {
          catchFrog($frog)
        })
  
      $gameContainer.append($frog)
      frogs.push($frog)
    }
  }
  
  
  

function startNextLevel() {
    
  frogCount = 0 
  level++
  frogAppears = level 
  $level.text(`Level ${level}`)
  $countCatch.text(`${frogAppears} Frogs left`)
  $timer.addClass("yellow")
  setTimeout(function () {
      $timer.removeClass("yellow")  
    }, 1000)

  createFrog()
}

function catchFrog($frog) {
  frogCount++
  frogAppears--
  $countCatch.text(`${frogAppears} Frogs left`)
  $frog.remove()
  if (frogCount >= level) { 
    count += 3 
    startNextLevel()
  }
}

function startGame() {
  frogCount = 1
  $countCatch.text(`${frogCount} Frogs left`)
  countdown()
  createFrog()
}

function countdown() {
  gameInterval = setInterval(function () {
    count--
    $timer.text(count + " " + "Seconds left")
    if (count < 4) {
      $timer.addClass("red")
    }
    if (count === 0) {
      GameInit()
    }
  }, 1000)
}

$startButton.on("click", function () {
  $startButton.text("catch the frogs!")
  $startButton.prop("disabled", true)
  startGame()
})