import { Observable } from "rxjs/internal/Observable";
import { User } from "src/domain/entities/user";

export interface remoteUserDataSource {
    getUserByUserName(params: { username: string }): Observable<User>;
}