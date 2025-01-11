import { userPlayerOne, AIPlayer } from "./Player"
import {createGame} from './dom.js'


function gameController(objData, AIobjData){


    createGame();
    const userP1 = new userPlayerOne(objData);

    
    const AI = new AIPlayer(AIobjData);
   


}

export default gameController