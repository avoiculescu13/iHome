export class StackStorage {
    private static _stack: any = [];

    public static Push(object: any): void {
        this._stack.Push(object);
    }

    public static Pop(): any {
        return this._stack.Pop();
    }
}