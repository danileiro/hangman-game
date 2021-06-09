import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { createGame, sendGuess } from "./utils/api";
import Hangman from './components/Hangman';

function App() {
    const [target, setTarget] = useState('');
    const [guess, setGuess] = useState('');
    const [token, setToken] = useState('');

    const handleCreateGame = () => {
        createGame(setTarget, setToken);
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        if (value.match(/^[a-zA-Z ]{0,1}$/)) {
            setGuess(value);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (guess !== '' && guess !== ' ') {
            // TODO: send guess to API
            console.log(guess);
            sendGuess(token, guess);
        }
    }

    return (
        <div className="App" style={styles.app}>
            <div className="hangman" style={styles.container}>
                <Hangman target={target} />
            </div>
            <div className='game-controls' style={styles.container}>
                {target ?
                    <form noValidate autoComplete='off' onSubmit={handleFormSubmit}>
                        <TextField 
                            label='Guess a letter'
                            variant='outlined'
                            value={guess}
                            onChange={handleInputChange}
                        />
                    </form>
                :
                    <Button onClick={handleCreateGame} variant='outlined'>
                        Create Game
                    </Button>
                }

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
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default App;
