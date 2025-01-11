import game from "./game";
import gameController from "./gameController";
//function UserData(X5, Y5, X4, Y4, X3, Y3, X2, Y2 ){
function UserData(X5, X4, X3, X2, Y5, Y4, Y3, Y2 ){

    this.X5 = X5;
    this.Y5 = Y5;

    this.X4 = X4;
    this.Y4 = Y4;

    this.X3 = X3;
    this.Y3 = Y3;

    this.X2 = X2;
    this.Y2 = Y2;
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
  
            //check for conflicting data
            const currBody = document.body;
            currBody.innerHTML = '';
            

            const userData = new UserData(X5, X4, X3, X2, Y5, Y4, Y3, Y2 )


            // create of array size 10, 0-9
            let arrX = []
            while (arrX.length <= 4){
                let randomNumber = Math.floor(Math.random() * 10);

                if(!arrX.includes(randomNumber)){
                    arrX.push(randomNumber)
                }
            }
            // create Y array
            let arrY = []
            
            while(arrY.length == 0){
                let randomNumberY = Math.floor(Math.random() * 6);

                if(!arrY.includes(randomNumberY)){
                    arrY.push(randomNumberY)
                }
            }
            while(arrY.length == 1){
                let randomNumberY = Math.floor(Math.random() * 7);

                if(!arrY.includes(randomNumberY)){
                    arrY.push(randomNumberY)
                }
            }
            while(arrY.length == 2){
                let randomNumberY = Math.floor(Math.random() * 8);

                if(!arrY.includes(randomNumberY)){
                    arrY.push(randomNumberY)
                }
            }
            while(arrY.length == 3){
                let randomNumberY = Math.floor(Math.random() * 9);

                if(!arrY.includes(randomNumberY)){
                    arrY.push(randomNumberY)
                }
            }
        
            

            
            const AIData = new UserData(arrX[0], arrX[1],arrX[2],arrX[3],arrY[0],arrY[1],arrY[2],arrY[3])
            gameController(userData, AIData);
        }

    });
}
//clear HTML
//call gameController(objData); after done here


export default shipPlacement;