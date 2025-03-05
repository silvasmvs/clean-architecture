export default interface UseCase<Args, Output> {
    execute(args: Args): Promise<Output>;
}