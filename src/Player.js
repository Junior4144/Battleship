
import GameBoard from "./Gameboard";
import {leftPlayerGrid, rightPlayerGrid, body} from './dom.js'
import endScreen from "./endScreen";
import game from './game'
import Ship from './ships'

export function userPlayerOne(objData){
    const gameBoard = new GameBoard();
    
    

    
    gameBoard.addShip(objData.X5, objData.Y5, 5) 
    gameBoard.addShip(objData.X4, objData.Y4, 4) 
    gameBoard.addShip(objData.X3, objData.Y3, 3) 
    gameBoard.addShip(objData.X2, objData.Y2, 2) 

   

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
                    if(gameBoard.checkIfAllSunk()){
                        endScreen("AI");
                    }
                    
                    
                }
                if(gameBoard.getIndex(i,j) == '0'){
                    cell.textContent = 'X'
                    game(i,j, gameBoard, "AI")
                    console.log(gameBoard)
                    if(gameBoard.checkIfAllSunk()){
                        endScreen("AI");
                    }
                    
                }

            
            });


            const LPGrid = leftPlayerGrid();


            LPGrid.appendChild(cell);
        }
    }
    //


}

export function AIPlayer(objData) {
    const gameBoard = new GameBoard();
    
    gameBoard.addShip(objData.X5, objData.Y5, 5) 
    gameBoard.addShip(objData.X4, objData.Y4, 4) 
    gameBoard.addShip(objData.X3, objData.Y3, 3) 
    gameBoard.addShip(objData.X2, objData.Y2, 2) 
    console.log(gameBoard.getBoard())

    for(let i = 0; i < 10; i++){

        for(let j = 0; j < 10; j++){
            const cell = document.createElement('div');
            
            // if(gameBoard.getIndex(i,j) instanceof Ship){
            //     //Showcases ship - to be removed
            //     cell.textContent = "S"
            // }

            cell.addEventListener('click', () =>{
                //a condition that doesn activate game() if 
                
                if(gameBoard.getIndex(i,j) instanceof Ship){
                    cell.textContent = 'O'
                    console.log(gameBoard.getIndex(i,j));
                    console.log("active ship");
                    
                    game(i,j, gameBoard, "user")
                    
                    if(gameBoard.checkIfAllSunk()){
                        endScreen("user");
                    }
                    
                }
                if(gameBoard.getIndex(i,j) == '0'){
                    cell.textContent = 'X'
                    game(i,j, gameBoard, "user")
                    console.log("active zero")
                    if(gameBoard.checkIfAllSunk()){
                        endScreen("user");
                    }
                }
                //if i, j == O or X nothing happens
                // on game() the next turn is granted
                
            
            
            });

            const RPGrid = rightPlayerGrid();


            RPGrid.appendChild(cell);
        }
    }
    

}

