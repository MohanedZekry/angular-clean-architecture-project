import { BaseUseCase } from "src/core/use_case/base_use_case";
import { User } from "../entities/user";
import { Observable } from "rxjs";
import { UserRepository } from "../repositories/user_repository";

export class GetUserByUserNameUseCase implements BaseUseCase<User, { username: string }>{
    constructor(private userRepository: UserRepository) { }

    execute(param: { username: string; }): Observable<User> {
        return this.userRepository
            .getUserByUserName(param);
    }

}