import axios from 'axios';
import { BASE_URL } from './config';
const api = axios.create({
    baseURL: BASE_URL
});
export const createGame = (setHangman, setToken, setIsLoading) => {
    api.post("/hangman")
        .then((res) => {
            setHangman(res.data.hangman);
            setToken(res.data.token);
            setIsLoading(false)
        })
        .catch((err) => console.log(err));
}

export const sendGuess = (token, guess, callback) => {
    api.put(`/hangman?token=${token}&letter=${guess}`)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => console.log(err));
}

export const getTarget = (token, setTarget, setIsLoading) => {
    api.get(`/hangman?token=${token}`)
        .then((res) => {
            setTarget(res.data.solution);
            setIsLoading(false);
        })
        .catch((err) => console.log(err));
}

export const getHint = (token, setHint) => {
    api.get(`/hangman/hint?token=${token}`)
        .then((res) => {
            setHint(res.letter);
        })
        .catch((err) => console.log(err));
}