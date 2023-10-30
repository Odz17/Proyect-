class Game {
    constructor() {
        this.currJerryTile = null;
        this.currTomTile = null;
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
<<<<<<< HEAD
        setInterval(this.setJerry.bind(this), 3000);
        setInterval(this.setTom.bind(this), 3000);
=======
        setInterval(this.setJerry.bind(this), 1000);
        setInterval(this.setTom.bind(this), 1250);
>>>>>>> 6394f58cb2ffe66ef983a3b28b60e73a62d92fc6
    }

    getRandomTile() {
        let num = Math.floor(Math.random() * 9);
        return num.toString();
    }
// JERRY
    setJerry() {
        if (this.gameOver) {
            return;
        }
        if (this.currJerryTile) {
            this.currJerryTile.innerHTML = "";
        }
<<<<<<< HEAD
        let jerry = document.createElement("img");
        jerry.src = "./Images/jerry_1.png";
=======
        let Jerry = document.createElement("img");
        Jerry.src = "./Images/jerry_1.png";
>>>>>>> 6394f58cb2ffe66ef983a3b28b60e73a62d92fc6

        let num = this.getRandomTile();
        if (this.currTomTile && this.currTomTile.id == num) {
            return;
        }
        this.currJerryTile = document.getElementById(num);
<<<<<<< HEAD
        this.currJerryTile.appendChild(jerry);
=======
        this.currJerryTile.appendChild(Jerry);
>>>>>>> 6394f58cb2ffe66ef983a3b28b60e73a62d92fc6
    }
// TOM
    setTom() {
        if (this.gameOver) {
            return;
        }
        if (this.currTomTile) {
            this.currTomTile.innerHTML = "";
        }
        let tom = document.createElement("img");
        tom.src = "./Images/tom.png";
        
        let num = this.getRandomTile();
        if (this.currJerryTile && this.currJerryTile.id == num) {
            return;
        }
        
        this.currTomTile = document.getElementById(num);
        this.currTomTile.appendChild(tom);
    }

    selectTile(event) {
        if (this.gameOver) {
            console.log("selectTile was called");
            return;
        }
        
<<<<<<< HEAD
        if (event.target == this.currTomTile.firstChild) {
            this.score += 10;
            document.getElementById("score").innerText = this.score.toString();
            
        } else if (event.target == this.currJerryTile.firstChild) {
=======
        if (event.target == this.currJerryTile) {
            this.score += 10;
            document.getElementById("score").innerText = this.score.toString();
            
        } else if (event.target == this.currTomTile) {
>>>>>>> 6394f58cb2ffe66ef983a3b28b60e73a62d92fc6
            document.getElementById("score").innerText = "GAME OVER: " + this.score.toString();
            this.gameOver = true;
            
        }
    }
}

window.onload = function() {
    let game = new Game();
    game.setGame();
}
