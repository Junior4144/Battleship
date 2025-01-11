import Ship from './ships'

function GameBoard() {
    //10 x 10 game board
    //2d array
    //for now 0 == water
    // missed shots = X
    // hit shot == O
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
    this.getIndex = (row, column) =>{
       
        return board[row][column]
    }
    this.receiveAttack = (x, y) =>{
        
        if(board[x][y] instanceof Ship){
            //hit the ship
            const hitShip = board[x][y];
            
            hitShip.hit();
            board[x][y] = "O"
            console.log(board);
            
        }
        else if(board[x][y] == 0){
            board[x][y] = "x"
            console.log(board);
        }
    }
    this.addShip = (x, y, length) =>{
        const ship = new Ship(length);
        const X = parseInt(x);
        const Y = parseInt(y);
        
        for(let i = 0; i < length; i++){
            board[X][Y + i] = ship
        }
    }

    this.checkIfAllSunk = () =>{
        //iterate through all  2d array find ships 
        //and check if they sunk
        let condition = false
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if(board[i][j] instanceof Ship){
                    //check if sunk == false return false
                    //if end and non are false return true
                    return condition
                }
            
           }
        }
        condition = true
        return condition
    }
}
export default GameBoard