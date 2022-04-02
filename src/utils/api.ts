import { getTokenFromStorage } from './helpers';

const url = 'http://localhost:3009';

export function login(email: string, password: string): Promise<string> {
    return fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            password,
            email,
        }),
    }).then((res) => res.json());
}

export function signUp(password: string, email: string, username: string) {
    return fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            password,
            email,
            username,
        }),
    }).then((res) => res.json());
}

export function validate() {
    return fetch(`${url}/validate`, {
        method: 'GET',
        headers: {
            authorization: getTokenFromStorage(),
        },
    }).then((res) => res.json());
}

export function getAllQuestions(): Promise<any> {
    return fetch(`${url}/questions?page=0`, {
        method: 'GET',
        headers: {
            authorization: getTokenFromStorage(),
        },
    }).then((res) => res.json());
}

export function getTags(){
    return fetch(`${url}/tags`, {
        method: 'GET',
        headers: {
            authorization: getTokenFromStorage(),
        },
    }).then((res) => res.json());
}

export function getSingleQuestion(id:number){
    return fetch(`${url}/question/${id}`, {
        method: 'GET',
        headers: {
            authorization: getTokenFromStorage(),
        },
    }).then((res) => res.json());
}