import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { User } from "./model/user";

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private _httpClient: HttpClient) {

    }

    register(user: User): Observable<User> {
        return this._httpClient.post<User>('/api/user/', user, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}
