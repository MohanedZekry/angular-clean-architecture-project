export abstract class Mapper<I, O> {
    abstract fromJson(param: I): O;
    abstract toJson(param: O): I;
}