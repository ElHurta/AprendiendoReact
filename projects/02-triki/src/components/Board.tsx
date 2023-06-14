import { Square } from "./Square"

export function Board({board, updateBoard}: {board: any[], updateBoard: (index: number) => void}) {
    return (
        <section className='game'>
            {
            board.map((_, index) => (
                <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                    {board[index]}
                </Square>
            ))
            }
        </section>
    )
}
