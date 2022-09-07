import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private _httpClient: HttpClient) { }

    getData(path: string, params: HttpParams = new HttpParams()) {
        return this._httpClient.get(`${environment.BASE_URL}${path}`, { params });

    }
    getSingleData(path: string) {
        return this._httpClient.get(`${environment.PRODUCT_URL}${path}`,);

    }
    GetProduct(path: string) {
        return this._httpClient.get(`${environment.PRODUCT_URL}${path}`,);
    }
    GetUser(path: string) {
        return this._httpClient.get(`${environment.PRODUCT_URL}${path}`,);
    }
    AddCart(path: string) {
        return this._httpClient.get(`${environment.PRODUCT_URL}${path}`,);
    }
    Create(path: string, body: any) {
        return this._httpClient.post(`${environment.PRODUCT_URL}${path}`, JSON.stringify(body));
    }
    Edit(path: string, body: any) {
        return this._httpClient.put(`${environment.PRODUCT_URL}${path}`, JSON.stringify(body));
    }
}