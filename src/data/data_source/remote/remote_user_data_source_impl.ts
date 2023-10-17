import { Observable, map } from "rxjs";
import { UserModel } from "src/data/models/user_model";
import { remoteUserDataSource } from "./remote_user_data_soruce";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { UserMapper } from "src/data/models/mappers/user_mapper";
import { User } from "src/domain/entities/user";

@Injectable({
    providedIn: 'root',
})
export class RemoteUserDataSourceImpl implements remoteUserDataSource {
    userMapper = new UserMapper();

    constructor(private http: HttpClient) { }

    getUserByUserName(params: { username: string; }): Observable<User> {
        return this.http
            .post<UserModel>('URL', { params })
            .pipe(map(this.userMapper.fromJson));

    }

}