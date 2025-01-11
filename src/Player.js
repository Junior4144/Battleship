
import GameBoard from "./Gameboard";
import {leftPlayerGrid, rightPlayerGrid, body} from './dom.js'
import game from './game'
import Ship from './ships'

export function userPlayerOne(){
    const gameBoard = new GameBoard();
    
    //apply ships

    
    gameBoard.addShip(2, 5) // row 2 ship length 5
    gameBoard.addShip(3, 4) // row 3 ship length 4
    gameBoard.addShip(4, 3) // row 4 ship length 3
    gameBoard.addShip(5, 2) // row 5 ship length 5
    
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const cell = document.createElement('div');

            if(gameBoard.getIndex(i,j) instanceof Ship){
                cell.textContent = "S"
            }

            cell.addEventListener('click', () =>{
                
                if(gameBoard.getIndex(i,j) instanceof Ship){
                    cell.textContent = 'O'
                    game(i,j, gameBoard, "AI")
                    console.log(gameBoard)
                    
                    
                }
                if(gameBoard.getIndex(i,j) == '0'){
                    cell.textContent = 'X'
                    game(i,j, gameBoard, "AI")
                    console.log(gameBoard)
                    
                }
            
            });


            const LPGrid = leftPlayerGrid();


            LPGrid.appendChild(cell);
        }
    }
    //


}

export function AIPlayer() {
    const gameBoard = new GameBoard();
    
    gameBoard.addShip(1, 5) // row 1 ship length 5
    gameBoard.addShip(3, 4) // row 3 ship length 4
    gameBoard.addShip(4, 3) // row 4 ship length 3
    gameBoard.addShip(6, 2) // row 6 ship length 5
    
    for(let i = 0; i < 10; i++){

        for(let j = 0; j < 10; j++){
            const cell = document.createElement('div');
            
            if(gameBoard.getIndex(i,j) instanceof Ship){
                //Showcases ship - to be removed
                cell.textContent = "S"
            }

            cell.addEventListener('click', () =>{
                //a condition that doesn activate game() if 
                
                if(gameBoard.getIndex(i,j) instanceof Ship){
                    cell.textContent = 'O'
                    console.log(gameBoard.getIndex(i,j));
                    console.log("active ship");
                    
                    game(i,j, gameBoard, "user")
                    
                    console.log(gameBoard.checkIfAllSunk())
                    
                }
                if(gameBoard.getIndex(i,j) == '0'){
                    cell.textContent = 'X'
                    game(i,j, gameBoard, "user")
                    console.log("active zero")
                    console.log(gameBoard.checkIfAllSunk())
                }
                //if i, j == O or X nothing happens
                // on game() the next turn is granted
                
            
            
            });

            const RPGrid = rightPlayerGrid();


            RPGrid.appendChild(cell);
        }
    }
    

}

