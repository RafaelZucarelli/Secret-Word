
import PropTypes from 'prop-types';
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

StartScreen.propTypes = {
  startGame: PropTypes.func.isRequired, // Define que startGame deve ser uma função e é obrigatório
};

export default StartScreen;
