export class Node {
    private _value: any;
    private _next?: Node;
    private _prev?: Node;
    constructor(value: number) {
        this._value = value;
    }
    public getValue(): number {
        return this._value;
    }
    public setNext(next: Node | undefined): Node | undefined {
        this._next = next;
        return this._next;
    }
    public getNext(): Node | undefined {
        return this._next;
    }
    public setPrev(prev: Node | undefined): Node | undefined {
        this._prev = prev;
        return this._prev;
    }
    public getPrev(): Node | undefined {
        return this._prev;
    }
}
