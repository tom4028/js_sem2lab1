const readline = require('readline');

class GuessGame{
    
    constructor(num){
        this.num = Number(num);
        this.numToGuess = null;
        this.guessesRemaining =10;
        this.gameState='';
        this.guessNum = null;
    }
    
    readInput(n){
        if(isNaN(n)){
            console.log("Koniec gry.Oszukujesz...");
            process.exit(0);
        }
        return Number(n);
    }

    randNumber(){
        return Math.floor(Math.random()*this.num+1);
    }
    newGame(){
        this.numToGuess = this.randNumber();
        
        var _interface = readline.createInterface({
            input:process.stdin,
            output:process.stdout,
            prompt:'>'
        });
        console.log("Zgadnij liczbę z przedziąlu 1-49 masz 10 prób");
        _interface.prompt();

        _interface.on('line',(input)=>{
            this.guessNum = this.readInput(input);
            console.log(`Zostało: `,--this.guessesRemaining);
            console.log(this.numToGuess);
            console.log(this.guessNum);
                
                if(this.guessNum < this.numToGuess){
                    console.log("Za mała liczba.");
                    _interface.prompt();
                }
                if(this.guessNum > this.numToGuess){
                    console.log("Za duża liczba.");
                    _interface.prompt();
                }
                if(this.guessesRemaining === 0 && !(this.guessNum === this.numToGuess)){
                    console.log("Koniec gry. Przegrałeś.");
                    process.exit(0);
                }
                if(this.guessNum === this.numToGuess){
                    console.log("Koniec gry. Wygrałeś:)");
                    process.exit(0);
                }             
        })
        
    }

}


const g = new GuessGame(49);
g.newGame();
