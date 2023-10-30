class Game {
    constructor() {
        this.currMoleTile = null;
        this.currPlantTile = null;
        this.score = 0;
        this.gameOver = false;
    }

    setGame() {
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement("div");
            tile.id = i.toString();
            tile.addEventListener("click", this.selectTile.bind(this));
            document.getElementById("board").appendChild(tile);
        }
        setInterval(this.setMole.bind(this), 1000);
        setInterval(this.setPlant.bind(this), 1250);
    }

    getRandomTile() {
        let num = Math.floor(Math.random() * 9);
        return num.toString();
    }

    setMole() {
        if (this.gameOver) {
            return;
        }
        if (this.currMoleTile) {
            this.currMoleTile.innerHTML = "";
        }
        let mole = document.createElement("img");
        mole.src = "./monty-mole.png";

        let num = this.getRandomTile();
        if (this.currPlantTile && this.currPlantTile.id == num) {
            return;
        }
        this.currMoleTile = document.getElementById(num);
        this.currMoleTile.appendChild(mole);
    }

    setPlant() {
        if (this.gameOver) {
            return;
        }
        if (this.currPlantTile) {
            this.currPlantTile.innerHTML = "";
        }
        let plant = document.createElement("img");
        plant.src = "./piranha-plant.png";
        
        let num = this.getRandomTile();
        if (this.currMoleTile && this.currMoleTile.id == num) {
            return;
        }
        
        this.currPlantTile = document.getElementById(num);
        this.currPlantTile.appendChild(plant);
    }

    selectTile(event) {
        if (this.gameOver) {
            return;
        }
        
        if (event.target == this.currMoleTile) {
            this.score += 10;
            document.getElementById("score").innerText = this.score.toString();
            
        } else if (event.target == this.currPlantTile) {
            document.getElementById("score").innerText = "GAME OVER: " + this.score.toString();
            this.gameOver = true;
            
        }
    }
}

window.onload = function() {
    let game = new Game();
    game.setGame();
}
