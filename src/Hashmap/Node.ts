export class Node<k, T>{
    private _key: String | null
    private _parent: Node<k, T> | null
    private _left: Node<k, T> | null
    private _right: Node<k, T> | null
    private _isRed: boolean
    private _value: String

    constructor(value: String, key: String) {
        this._value = value
        this._key = key
        this._parent = null
        this._left = null
        this._right = null
        this._isRed = true
    }

    getKey(): String | null {
        return this._key
    }

    setKey(key: String | null) {
        this._key = key
    }

    getValue(): String {
        return this._value
    }

    setValue(value: String) {
        this._value = value
    }

    getParent(): Node<k, T> | null {
        return this._parent
    }

    setParent(parent: Node<k, T> | null) {
        this._parent = parent
    }

    getLeft(): Node<k, T> | null {
        return this._left
    }

    setLeft(left: Node<k, T> | null) {
        this._left = left
    }

    getRight(): Node<k, T> | null {
        return this._right
    }

    setRight(right: Node<k, T> | null) {
        this._right = right
    }

    isRed(): boolean {
        return this._isRed
    }

    setRed(isRed: boolean) {
        this._isRed = isRed
    }
}
