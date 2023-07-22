function saveGameToLocalStorage({ board, turn } : { board: any[], turn: string }) {
    localStorage.setItem('board', JSON.stringify(board));
    localStorage.setItem('turn', turn);
}

function resetGameOnLocalStorage() {
    localStorage.removeItem('board');
    localStorage.removeItem('turn');
}

export { saveGameToLocalStorage, resetGameOnLocalStorage };