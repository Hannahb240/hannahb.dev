import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    kind: string,
    registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient){}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAI8BPNlssE-FllwiHpR4vwM9rb6-KPmLU', 
        { 
          email: email, 
          password: password,
          returnSecureToken: true
        });
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAI8BPNlssE-FllwiHpR4vwM9rb6-KPmLU',{ 
            email: email, 
            password: password,
            returnSecureToken: true
        });
    }
}

