import Logo from "../public/game-logo.png";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <header>
        <h1>Tic-Tac-Toe</h1>
        <img src={Logo} alt="logo" />
      </header>
      <main>
        <div id="game-container">
          PLAYERS GAME BOARD
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          <GameBoard />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
