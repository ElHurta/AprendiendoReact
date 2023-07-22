import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS, combos } from './constants'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import confetti from 'canvas-confetti'

import { saveGameToLocalStorage, resetGameOnLocalStorage } from './utils/storage-service'

import './App.css'

function App() {

  const [board, setBoard] = useState<Array<any>>(
    () => {
      const boardFromLocalStorage = window.localStorage.getItem('board')
      return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
    }
  )

  const [turn, setTurn] = useState<String>(
    () => {
      const turnFromLocalStorage = window.localStorage.getItem('turn')
      return turnFromLocalStorage ? turnFromLocalStorage : TURNS.X
    }
  )

  const [winner, setWinner] = useState<string | boolean | null>(null) // null = no winner;  false = tie

  const checkWinner = (board: any) => {
    for (let i = 0; i < combos.length; i++) {
      const [a, b, c] = combos[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameOnLocalStorage()
  }

  const updateBoard = (index: number) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToLocalStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (!newBoard.includes(null)) {
      setWinner(false)
    }
  }

  return (
    <>
      <main className='board'>
        <h1>Triki</h1>
        <button onClick={resetGame}>Empieza de nuevo</button>
        <Board
          board={board}
          updateBoard={updateBoard}
        />

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>

        <WinnerModal
          winner={winner}
          resetGame={resetGame}
        />
      </main>
    </>
  )
}

export default App
