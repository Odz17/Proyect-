class Game {
    constructor () {
        this.startScreen = document.querySelector('#game-intro');
        this.gameScreen = document.querySelector('.game-screen'); // Corregido el selector
        this.gameEndScreen = document.querySelector('#game-end');
        this.height = 600;
        this.width = 500;
        this.score = 0;
        this.livesElement = document.querySelector("#lives");
        this.lives = 3; // Corregido el nombre de la variable
        this.livesElement.textContent = this.lives;
        this.gameIsOver=false;
    }
    start() {
        this.gameScreen.style.width = `${this.width}px`; // Corregido el uso de las comillas
        this.gameScreen.style.height = `${this.height}px`; // Corregido el uso de las comillas
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameLoop();
    }
    
    gameLoop() {
        if (this.gameIsOver) // Corregido la sintaxis
            return;
        this.update(); // Corregido el nombre del método
        window.requestAnimationFrame(() => this.gameLoop());
    }
   
    update() { // Añadido el método update
        if (this.lives === 0) {
            this.endGame();
        }
    }
   
    endGame() {
        this.gameIsOver = true;
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
}