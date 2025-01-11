

export function body(){
    const body = document.body;
    return body;
}

export function leftPlayerGrid(){
    const LP = document.querySelector('.left-grid');
    return LP
}

export function rightPlayerGrid(){
    const RP = document.querySelector('.right-grid');
    return RP
}

export function createGame(){
    const BC = body();

    const TC = document.createElement('div');
    TC.classList.add('title-container');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'BATTLESHIP';

    TC.appendChild(title)

    const turnContainer = document.createElement('div');
    turnContainer.classList.add('turn-container');

    const turn = document.createElement('div');
    turn.classList.add('turn');
    turn.textContent = "User's turn";

    turnContainer.appendChild(turn);

    const GC = document.createElement('div');
    GC.classList.add('game-container')

    const LG = document.createElement('div');
    LG.classList.add('left-grid');

    const RG = document.createElement('div');
    RG.classList.add('right-grid');

    GC.appendChild(LG);
    GC.appendChild(RG);

    BC.appendChild(TC);
    BC.appendChild(turnContainer)
    BC.appendChild(GC);
}