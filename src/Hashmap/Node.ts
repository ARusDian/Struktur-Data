export class Node<T>{
    private _key: String
    private _value: String
    private _parent: Node<T> | null
    private _right: Node<T> | null
    private _left: Node<T> | null

    constructor(key: String, value: String) {
        this._key = key
        this._value = value
        this._parent = null
        this._right = null
        this._left = null
    }

    getKey(): String {
        return this._key
    }

    setKey(key: String) {
        this._key = key
    }

    getValue(): String {
        return this._value
    }

    setValue(value: String) {
        this._value = value
    }

    getParent(): Node<T> | null {
        return this._parent
    }

    setParent(parent: Node<T>| null) {
        this._parent = parent
    }

    getRight(): Node<T> | null{
        return this._right
    }

    setRight(right: Node<T> | null) {
        this._right = right
    }

    getLeft(): Node<T> | null{
        return this._left
    }

    setLeft(left: Node<T> | null) {
        this._left = left
    }
}
