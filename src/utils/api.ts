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

export function getAllQuestions(page: number): Promise<any> {
    return fetch(`${url}/questions?page=${page}`, {
        method: 'GET',
        headers: {
            authorization: getTokenFromStorage(),
        },
    }).then((res) => res.json());
}

export function getTags() {
    return fetch(`${url}/tags`, {
        method: 'GET',
        headers: {
            authorization: getTokenFromStorage(),
        },
    }).then((res) => res.json());
}

export function getSingleQuestion(id: number) {
    return fetch(`${url}/question/${id}`, {
        method: 'GET',
        headers: {
            authorization: getTokenFromStorage(),
        },
    }).then((res) => res.json());
}

export function createComment(
    userId: any,
    questionId: any,
    content: any,
    createdAt: any
) {
    return fetch(`${url}/comment`, {
        method: 'POST',
        headers: {
            authorization: getTokenFromStorage(),
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            userId,
            questionId,
            content,
            createdAt,
        }),
    }).then((res) => res.json());
}

export function likeComment(commentId: any) {
    return fetch(`${url}/comment/${commentId}/upvote`, {
        method: 'PATCH',
        headers: {
            authorization: getTokenFromStorage(),
            'Content-type': 'application/json',
        },
    }).then((res) => res.json());
}

export function checkIfLikedCommnent(commentId: any) {
    return fetch(`${url}/commentLiked`, {
        method: 'POST',
        headers: {
            authorization: getTokenFromStorage(),
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            commentId,
        }),
    }).then((res) => res.json());
}

export function getPopularTags() {
    return fetch(`${url}/popularTags`).then((res) => res.json());
}

export function getQuestionsByTag(tag: string) {
    return fetch(`${url}/tag/${tag}`).then((res) => res.json());
}
