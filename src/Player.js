
import GameBoard from "./Gameboard";
import {leftPlayerGrid, rightPlayerGrid, body} from './dom.js'


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


            const LPGrid = leftPlayerGrid();


            LPGrid.appendChild(cell);
        }
    }
}

function AIPlayer() {

}

