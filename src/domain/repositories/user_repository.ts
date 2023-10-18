import { Observable } from "rxjs";
import { User } from "../entities/user";

export abstract class UserRepository {
    abstract getUserByUserName(params: { username: string }): Observable<User>;
    abstract addNewUser(params: { user: User }): Observable<boolean>;
    abstract getAllUsers(): Observable<User[]>;
    abstract forgetPassword(params: { email: string }): Observable<boolean>;
}