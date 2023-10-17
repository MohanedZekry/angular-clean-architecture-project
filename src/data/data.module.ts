import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from 'src/domain/repositories/user_repository';
import { GetUserByUserNameUseCase } from 'src/domain/use_cases/get_user_by_username_use_case';
import { UserRepositoryImpl } from './repsoitories/user_repository_impl';

const userUserByUserNameFactory =
    (userRepo: UserRepository) => new GetUserByUserNameUseCase(userRepo);
    
export const userByUserNameProvider = {
    provide: GetUserByUserNameUseCase,
    useFactory: userUserByUserNameFactory,
    deps: [UserRepository],
};

@NgModule({
    providers: [
        userByUserNameProvider,
        { provide: UserRepository, useClass: UserRepositoryImpl },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }