import "./GameOver.css";

const GameOver = ({retry, score}) => {
  return (
    <div className='end'>
      <h1>Fim do jogo!</h1>
      <h1>A sua pontuação foi: <span>{score}</span></h1>
      <button onClick={retry}> Resetar jogo</button>
    </div>
  )
}

export default GameOver
