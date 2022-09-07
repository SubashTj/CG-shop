import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


    constructor(private _httpClient: HttpClient) {

    }
    setAuth(data: any) {
        localStorage.setItem('currentUser', 'loggedIn');

    }
    logout() {
        localStorage.removeItem('currentUser');
    }
    public get loggedIn(): boolean {
        return (localStorage.getItem('currentUser') !== null);
    }
    getToken() {
        return localStorage.getItem('currentUser');
    }
}