import game from "./game";
import gameController from "./gameController";
function UserData(X5, Y5, X4, Y4, X3, Y3, X2, Y2 ){

    this.X_CORDS_FIVE = X5;
    this.Y_CORDS_FIVE = Y5;

    this.X_CORDS_FOUR = X4;
    this.Y_CORDS_FOUR = Y4;

    this.X_CORDS_THREE = X3;
    this.Y_CORDS_THREE = Y3;

    this.X_CORDS_TWO = X2;
    this.Y_CORDS_TWO = Y2;
}


function shipPlacement(){
    console.log("sd");

    const form = document.querySelector('form')
    //send object with the data
    //obtain form data 

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!form.checkValidity()){
           
        }
        else{

            const X5 = document.getElementById('x-ship-5').value;
            const Y5 = document.getElementById('y-ship-5').value;

            const X4 = document.getElementById('x-ship-4').value;
            const Y4 = document.getElementById('y-ship-4').value;

            const X3 = document.getElementById('x-ship-3').value;
            const Y3 = document.getElementById('y-ship-3').value;

            const X2 = document.getElementById('x-ship-2').value;
            const Y2 = document.getElementById('y-ship-2').value;

            const currBody = document.body;
            currBody.innerHTML = '';
            

            const userData = new UserData(X5, Y5, X4, Y4, X3, Y3, X2, Y2)
            gameController(userData);
        }

    });
}
//clear HTML
//call gameController(objData); after done here


export default shipPlacement;