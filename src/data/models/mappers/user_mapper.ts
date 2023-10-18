import { Mapper } from "src/core/utils/mapper";
import { UserModel } from "../user_model";
import { User } from "src/domain/entities/user";

export class UserMapper extends Mapper<UserModel, User> {
    override fromJson(param: UserModel): User {
        return {
            email: param.email,
            name: param.name,
            phone: param.phone,
            userName: param.userName,
            password: param.passowrd,
            confirmPassword: param.passowrd
        }
    }
    override toJson(param: User): UserModel {
        return {
            email: param.email,
            name: param.name,
            phone: param.phone,
            userName: param.userName,
            passowrd: param.password
        }
    }

}