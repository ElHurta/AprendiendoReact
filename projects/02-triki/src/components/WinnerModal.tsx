import { Square } from './Square'

export function WinnerModal ({ winner, resetGame } : {winner: string | boolean | null, resetGame: () => void}) {
    if (winner=== null) return null 

    const winnerText = winner === false ? 'Empate' : `Ganador: ${winner}`

    return (
        <>
            <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>

                {winner ?
                    <>
                        <header className='win'>

                            <Square>{winner}</Square>
                        </header>
                    </> : null
                }

                <footer>
                    <button onClick={resetGame}>
                        Empezar de nuevo
                    </button>
                </footer>
            </div>
            </section>
        </>
    )
}