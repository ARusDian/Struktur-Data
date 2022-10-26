import { Node } from "./Node";

export class BinaryTree<T> { 
    private _root: Node<T> | null
    
    constructor() {
        this._root = null;
    }

    getRoot(): Node<T> | null {
        return this._root;
    }

    insert(value: T) : boolean { 
        let newNode = new Node(value)
        if (this._root === null) {
            this._root = newNode;
            return true;
        } else {
            let res = this.insertNode(this._root, newNode);
            return res;
        }

    }

    insertNode(node: Node<T>, newNode: Node<T>): boolean { 
        if (newNode.getValue() < node.getValue()) {
            if (node.getLeft() === null) {
                node.setLeft(newNode);
                newNode.setParent(node);
                return true;
            } else {
                this.insertNode(node.getLeft()!, newNode);
                return true;
            }
        } else if(newNode.getValue() > node.getValue()) {
            if (node.getRight() === null) {
                node.setRight(newNode)
                newNode.setParent(node)
                return true;
            } else {
                this.insertNode(node.getRight()!, newNode)
                return true;
            }
        } else {
            return false;
        }
    }

    search(value: T): Node<T> | null {
        return this.searchNode(this._root, value)
    }

    searchNode(node: Node<T> | null, value: T): Node<T> | null {
        if (node === null) {
            return null
        } else if (value < node.getValue()) {
            return this.searchNode(node.getLeft(), value)
        } else if (value > node.getValue()) {
            return this.searchNode(node.getRight(), value)
        } else {
            return node
        }
    }

    isExist(value: T): boolean { 
        return this.search(value) !== null
    }

    showAll() {
        if (this._root !== null) {
            this.showAllNode(this._root)
        }
    }
    
    showAllNode(node: Node<T>) { 
        if (node.getLeft() !== null) {
            this.showAllNode(node.getLeft()!)
        }
        console.log(node.getValue())
        if (node.getRight() !== null) {
            this.showAllNode(node.getRight()!)
        }
    }
}
