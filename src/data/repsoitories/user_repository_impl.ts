import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { User } from "src/domain/entities/user";
import { UserRepository } from "src/domain/repositories/user_repository"
import { UserMapper } from "../models/mappers/user_mapper";
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../models/user_model";

@Injectable({
    providedIn: 'root',
})
export class UserRepositoryImpl extends UserRepository {
    userMapper = new UserMapper();

    constructor(private http: HttpClient) {
        super();
    }

    override getUserByUserName(params: { username: string; }): Observable<User> {
        return this.http
            .get<UserModel>('URL', { params })
            .pipe(map(this.userMapper.fromJson));

    }
    override addNewUser(params: { user: User; }): Observable<boolean> {
        throw new Error("Method not implemented.");
    }
    override getAllUsers(): Observable<User[]> {
        throw new Error("Method not implemented.");
    }
}