


function game(x, y , gameBoard, attacker){
    //check if ship or water
    

    if(attacker == 'user'){

        
        gameBoard.receiveAttack(x,y);
        const randomNum = Math.floor(Math.random() * 100);
        
        const parentNode = document.querySelector('.left-grid');
        const childNode = parentNode.children[randomNum];
        childNode.click();
        
    }
    console.log(attacker)

    
    
    //structure
    //First turn : User attacks AI board so AI game board is active
    //Second turn: AI attacks User -> User game board is active
    

    //So after User attacks, AI attacks

    //get a random number from 0 - 99
    // activate that cell
}


export default game;