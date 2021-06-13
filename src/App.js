import { useState } from "react";
import { createGame, sendGuess, getHint, getTarget } from "./utils/api";
import Hangman from './components/Hangman';
import Controls from './components/Controls';

function App() {
    const [hangman, setHangman] = useState('');
    const [guess, setGuess] = useState('');
    const [token, setToken] = useState('');
    const [result, setResult] = useState({});
    const [attempts, setAttempts] = useState([]);
    const [hint, setHint] = useState();
    const [isGameCreated, setIsGameCreated] = useState(false);

    const handleCreateGame = () => {
        createGame(setHangman, setToken);
        setIsGameCreated(true);
        setAttempts([]);
    };


    const joinLetter = (arr, response) => {
        const newArray = arr
        newArray.map((el, i) => {
            if (response[i] !== '_') {
                newArray[i] = response[i];
            }
        })
        return newArray;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (guess !== '' && guess !== ' ') {
            let atps = attempts.map((at) => at.letter);
            if (!atps.includes(guess)) {
                sendGuess(token, guess, (response) => {
                    setResult(response)
                    setAttempts((attempts) => [...attempts, {letter: guess, correct: response.correct}]);
                    if (response.correct) {
                        console.log('update hangman text!');
                        const newHangman = joinLetter([...hangman], [...response.hangman])
                        setHangman(newHangman)
                    }
                });
            }
        }
        setGuess('');
    }

    // Due to CORS policy, this feature can't be used in the browser
    const handleGetHint = () => {
        getHint(token, setHint);
    }

    const handleSolveHangman = () => {
        getTarget(token, setHangman);
        setIsGameCreated(false);
    }

    return (
        <div className="App" style={styles.app}>
            <div className="hangman" style={styles.container}>
                <Hangman
                    target={hangman}
                    attempts={attempts}
                    handleSolveHangman={handleSolveHangman}
                    isGameCreated={isGameCreated}
                />
            </div>
            <div className='game-controls' style={styles.container}>
                <Controls 
                    isGameCreated={isGameCreated}
                    handleFormSubmit={handleFormSubmit}
                    guess={guess}
                    setGuess={setGuess}
                    handleCreateGame={handleCreateGame}
                    handleGetHint={handleGetHint}
                />
            </div>
        </div>
    );
}

const styles = {
    app: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    debug: {
        border: '1px solid red',
        backgroundColor: 'lightgray',
    },
    container: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default App;
