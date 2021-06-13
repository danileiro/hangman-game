import React from 'react'
import { Button, CircularProgress } from "@material-ui/core";

const Hangman = ({ target, attempts, handleSolveHangman, isGameCreated, isLoading }) => {
    const renderAttempts = (att) => {
        return (
            <p style={styles.attempts}>
                {att.map((el, idx) => (
                    <React.Fragment key={idx}>
                        <span style={el.correct ? {} : {color: 'red'}} >{el.letter}</span>
                        <span>, </span>
                    </React.Fragment>
                ))}
            </p>
        );
    };

    return (
        <div style={styles.container} >
            <div className="word-container">
                {(isLoading) ?
                    <CircularProgress />
                    :
                    <span style={styles.word}>
                        {target}
                    </span>
                }
            </div>
            <div className="attempts">
                {renderAttempts(attempts)}
            </div>
            <div className="response-btn" style={styles.response}>
                {(isGameCreated) ? 
                    <Button onClick={handleSolveHangman} variant='outlined'>
                        Get response
                    </Button>
                    :
                    <span style={styles.title}>Hangman Game!</span>
                }
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    word: {
        fontSize: '3em',
        textDecoration: 'bold',
    },
    title: {
        fontSize: '5em',
        textDecoration: 'bold',
    },
    attempts: {
        marginTop: '3em',
        textAlign: 'center',
        fontSize: '2em',
        textDecoration: 'bold',
    },
    response: {
        marginTop: '3em',
        textAlign: 'center',
    },
}

export default Hangman;
