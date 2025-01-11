import { userPlayerOne, AIPlayer } from "./Player"
import {createGame} from './dom.js'


function gameController(){


    createGame();
    const userP1 = new userPlayerOne();

    const AI = new AIPlayer();
   


}

export default gameController