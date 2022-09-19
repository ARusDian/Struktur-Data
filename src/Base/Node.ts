export class NodeData {
    private _value: number;
    private _next?: NodeData;
    private _prev?: NodeData;
    constructor(value: number) {
        this._value = value;
    }
    public getValue(): number {
        return this._value;
    }
    public setNext(next: NodeData | undefined): NodeData | undefined {
        this._next = next;
        return this._next;
    }
    public getNext(): NodeData | undefined {
        return this._next;
    }
    public setPrev(prev: NodeData | undefined): NodeData | undefined {
        this._prev = prev;
        return this._prev;
    }
    public getPrev(): NodeData | undefined {
        return this._prev;
    }
}
