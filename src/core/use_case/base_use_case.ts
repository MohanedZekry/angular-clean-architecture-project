import { Observable } from "rxjs";

export interface BaseUseCase<T, P> {
    execute(param: P): Observable<T>;
}