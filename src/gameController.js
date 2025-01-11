import { userPlayerOne, AIPlayer } from "./Player"
import {createGame} from './dom.js'


function gameController(objData){


    createGame();
    const userP1 = new userPlayerOne(objData);

    const AI = new AIPlayer();
   


}

export default gameController