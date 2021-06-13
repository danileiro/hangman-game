import requests
from urllib.parse import urljoin

BASE_URL = 'https://hangman-api.herokuapp.com'

def createGame():
    try:
        url = urljoin(BASE_URL, '/hangman')
        response = requests.post(url)
        print(response.json())
        return response.json()
    except Exception as err:
        print(err)

def sendGuess(token, letter):
    try:
        url = urljoin(BASE_URL, f'/hangman?token={token}&letter={letter}')
        response = requests.put(url)
        print(response.json())
        return response.json()
    except Exception as err:
        print(err)

def getAnswer(token):
    try:
        url = urljoin(BASE_URL, f'/hangman?token={token}')
        response = requests.get(url)
        print(response.json())
        return response.json()
    except Exception as err:
        print(err)

def getHint(token):
    try:
        url = urljoin(BASE_URL, f'/hangman/hint?token={token}')
        response = requests.get(url)
        print(response.json())
        return response.json()
    except Exception as err:
        print(err)
