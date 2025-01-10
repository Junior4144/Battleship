import Ship from './ships'

function GameBoard() {
    //10 x 10 game board
    //2d array
    //for now 0 == water
    // missed shots = X
    // hit shot == 1
    let board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
   
    this.getBoard = () =>{
        return board;
    }
    this.receiveAttack = (x, y) =>{
        
        if(board[x][y] != 0 & board[x][y] != 1){
            //hit the ship
            const hitShip = board[x][y];
            
            hitShip.hit();
            board[x][y] = 1
            console.log(board);
            
        }
        else if(board[x][y] == 0){
            board[x][y] = "x"
            console.log(board);
        }
    }
    this.addShip = (x, length) =>{
        const ship = new Ship(length);
        for(let i = 0; i < length; i++){
            board[x][i] = ship
        }
    }

    this.checkIfAllSunk = () =>{
        //iterate through all  2d array find ships 
        //and check if they sunk
        let condition = false
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if(board[i][j] != 0 & board[i][j] != 1){
                    //check if sunk == false return false
                    //if end and non are false return true
                    if(!board[i][j].isSunk()){
                        return condition
                    }
                }
            
           }
        }
        condition = true
        return condition
    }
}
export default GameBoard