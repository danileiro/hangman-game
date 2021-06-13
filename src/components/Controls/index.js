import React from 'react'
import { Button, TextField } from "@material-ui/core";

const Controls = ({ isGameCreated, handleFormSubmit, guess, setGuess, handleCreateGame, handleGetHint }) => {
    const handleInputChange = (e) => {
        const { value } = e.target;
        if (value.match(/^[a-zA-Z ]{0,1}$/)) {
            setGuess(value);
        }
    }

    return (
        <div>
            {isGameCreated ?
                <>
                    <form noValidate autoComplete='off' onSubmit={handleFormSubmit}>
                        <TextField 
                            label='Guess a letter'
                            variant='outlined'
                            value={guess}
                            onChange={handleInputChange}
                            autoFocus
                        />
                    </form>
                    {/* <Button onClick={handleGetHint} style={{margin:'5px'}} variant='outlined'>
                        Hint?
                    </Button> */}
                </>
            :
                <Button onClick={handleCreateGame} variant='outlined'>
                    Create Game
                </Button>
            }
        </div>
    )
}

export default Controls
