import { Node } from "./Node";

export class BinaryTree<T> {
    private _root: Node<T> | null

    constructor() {
        this._root = null;
    }

    getRoot(): Node<T> | null {
        return this._root;
    }

    setRoot(value: Node<T> | null) {
        this._root = value
    }

    getMinNode(node: Node<T>): Node<T> {
        if (node.getLeft() !== null) {
            return this.getMinNode(node.getLeft()!);
        } else {
            return node;
        }
    }

    getMaxNode(node: Node<T>): Node<T> {
        if (node.getRight() !== null) {
            return this.getMaxNode(node.getRight()!);
        } else {
            return node;
        }
    }

    insert(value: T): boolean {
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
        } else if (newNode.getValue() > node.getValue()) {
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

    inOrder(node: Node<T> | null = this._root) {
        if (node !== null) {
            this.inOrder(node.getLeft())
            console.log(node.getValue())
            this.inOrder(node.getRight())
        }
    }

    preOrder(node: Node<T> | null = this._root) {
        if (node !== null) {
            console.log(node.getValue())
            this.preOrder(node.getLeft())
            this.preOrder(node.getRight())
        }
    }

    postOrder(node: Node<T> | null = this._root) {
        if (node !== null) {
            this.postOrder(node.getLeft())
            this.postOrder(node.getRight())
            console.log(node.getValue())
        }
    }

    printTree(prefix: String = "", Node: Node<T> | null = this._root, isLeft: boolean = true) {
        if (Node !== null) {
            this.printTree(
                prefix === "" ?
                    prefix + (isLeft ? "    " : "    ") :
                    prefix + (isLeft ? "│   " : "    "),
                Node!.getRight(), false);
            console.log((
                prefix === "" ?
                    prefix + "─── " : prefix + (isLeft ? "└── " : "┌── ")) +
                Node!.getValue()
            );
            this.printTree(prefix + (isLeft ? "    " : "│   "), Node!.getLeft(), true);
        }
    }

    remove(value: T): Boolean {
        let node = this.search(value)
        if (node !== null) {
            this.removeNode(node)
            return true;
        }
        return false;
    }

    removeNode(node: Node<T>) {
        if (node.getLeft() === null && node.getRight() === null) {
            if (node.getParent() !== null) {
                if (node.getParent()!.getLeft() === node) {
                    node.getParent()!.setLeft(null)
                } else {
                    node.getParent()!.setRight(null)
                }
            } else {
                this._root = null
            }
        } else if (node.getLeft() !== null && node.getRight() === null) {
            if (node.getParent() !== null) {
                if (node.getParent()!.getLeft() === node) {
                    node.getParent()!.setLeft(node.getLeft()!)
                } else {
                    node.getParent()!.setRight(node.getLeft()!)
                }
            } else {
                this._root = node.getLeft()
            }
        } else if (node.getLeft() === null && node.getRight() !== null) {
            if (node.getParent() !== null) {
                if (node.getParent()!.getLeft() === node) {
                    node.getParent()!.setLeft(node.getRight()!)
                } else {
                    node.getParent()!.setRight(node.getRight()!)
                }
            } else {
                this._root = node.getRight()
            }
        } else {
            let minNode = this.getMinNode(node.getRight()!)
            node.setValue(minNode.getValue())
            this.removeNode(minNode)
        }
    }
}
