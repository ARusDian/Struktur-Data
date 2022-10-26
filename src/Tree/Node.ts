export class Node<T>{
    private _value: T
    private _parent: Node<T> | null
    private _right: Node<T> | null
    private _left: Node<T> | null

    constructor(value: T) {
        this._value = value
        this._parent = null
        this._right = null
        this._left = null
    }

    getValue(): T {
        return this._value
    }

    setValue(value: T) {
        this._value = value
    }

    getParent(): Node<T> | null {
        return this._parent
    }

    setParent(parent: Node<T>) {
        this._parent = parent
    }

    getRight(): Node<T> | null{
        return this._right
    }

    setRight(right: Node<T>) {
        this._right = right
    }

    getLeft(): Node<T> | null{
        return this._left
    }

    setLeft(left: Node<T>) {
        this._left = left
    }
}
