import axios from 'axios';
import { BASE_URL } from './config';
const api = axios.create({
    baseURL: BASE_URL
});
export const createGame = (setTarget, setToken) => {
    api.post("/hangman")
        .then((res) => {
            console.log(res);
            setTarget(res.data.hangman);
            setToken(res.data.token);
        })
        .catch((err) => console.log(err));
}

export const sendGuess = (token, guess, setResult) => {
    api.put(`/hangman?token=${token}&letter=${guess}`)
        .then((res) => {
            setResult(res.data);
        })
        .catch((err) => console.log(err));
}

export const getTarget = (token, setTarget) => {
    api.put(`/hangman?token=${token}`)
        .then((res) => {
            setTarget(res.data);
        })
        .catch((err) => console.log(err));
}