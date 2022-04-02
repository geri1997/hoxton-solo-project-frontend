export function getTokenFromStorage() {
    return localStorage.token || '';
}

export function setTokenInStorage(token:string){
    localStorage.token = token
}

export function removeTokenFromStorage(){
    localStorage.clear()
}