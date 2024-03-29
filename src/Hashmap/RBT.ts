import { Node } from "./Node";

export class hashmap<k, T>{
    protected _root: Node<k, T> | null

    constructor() {
        this._root = null;
    }

    getRoot(): Node<k, T> | null {
        return this._root;
    }

    setRoot(value: Node<k, T> | null) {
        this._root = value
    }

    insert(key: k, value: T): boolean {
        let newNode = new Node(value, key);
        if (this._root === null) {
            this._root = newNode;
            this._root.setRed(false);
            return true;
        } else {
            let res = this.insertNode(this._root, newNode);
            return res;
        }
    }

    insertNode(node: Node<k, T>, newNode: Node<k, T>): boolean {
        if (newNode.getKey()! < node.getKey()!) {
            if (node.getLeft() === null) {
                node.setLeft(newNode);
                newNode.setParent(node);
                this.fixTree(newNode);
                return true;
            } else {
                this.insertNode(node.getLeft()!, newNode);
                return true;
            }
        } else if (newNode.getKey()! > node.getKey()!) {
            if (node.getRight() === null) {
                node.setRight(newNode)
                newNode.setParent(node)
                this.fixTree(newNode);
                return true;
            } else {
                this.insertNode(node.getRight()!, newNode)
                return true;
            }
        } else {
            return false;
        }
    }

    fixTree(node: Node<k, T>) {
        while (node.getParent() !== null && node.getParent()!.isRed()) {
            let uncle = this.getUncle(node);
            let grandParent = this.getGrandParent(node);
            if (uncle !== null && uncle.isRed()) {
                node.getParent()!.setRed(false);
                uncle.setRed(false);
                grandParent!.setRed(true);
                node = grandParent!;
            } else {
                if (node === node.getParent()!.getRight() && node.getParent() === grandParent!.getLeft()) {
                    this.rotateLeft(node.getParent()!);
                    node = node.getLeft()!;
                } else if (node === node.getParent()!.getLeft() && node.getParent() === grandParent!.getRight()) {
                    this.rotateRight(node.getParent()!);
                    node = node.getRight()!;
                }
                grandParent = this.getGrandParent(node);
                node.getParent()!.setRed(false);
                grandParent!.setRed(true);
                if (node === node.getParent()!.getLeft() && node.getParent() === grandParent!.getLeft()) {
                    this.rotateRight(grandParent!);
                } else {
                    this.rotateLeft(grandParent!);
                }
            }
        }
        this._root!.setRed(false);
    }

    getGrandParent(node: Node<k, T>): Node<k, T> | null {
        if (node.getParent() === null) {
            return null;
        } else {
            return node.getParent()!.getParent();
        }
    }

    getUncle(node: Node<k, T>): Node<k, T> | null {
        let grandParent = this.getGrandParent(node);
        if (grandParent === null) {
            return null;
        } else {
            if (node.getParent() === grandParent.getLeft()) {
                return grandParent.getRight();
            } else {
                return grandParent.getLeft();
            }
        }
    }

    rotateLeft(node: Node<k, T>) {
        let right = node.getRight();
        node.setRight(right!.getLeft());
        if (right!.getLeft() !== null) {
            right!.getLeft()!.setParent(node);
        }
        right!.setParent(node.getParent());
        if (node.getParent() === null) {
            this._root = right;
        } else {
            if (node === node.getParent()!.getLeft()) {
                node.getParent()!.setLeft(right);
            } else {
                node.getParent()!.setRight(right);
            }
        }
        right!.setLeft(node);
        node.setParent(right);
    }

    rotateRight(node: Node<k, T>) {
        let left = node.getLeft();
        node.setLeft(left!.getRight());
        if (left!.getRight() !== null) {
            left!.getRight()!.setParent(node);
        }
        left!.setParent(node.getParent());
        if (node.getParent() === null) {
            this._root = left;
        } else {
            if (node === node.getParent()!.getRight()) {
                node.getParent()!.setRight(left);
            } else {
                node.getParent()!.setLeft(left);
            }
        }
        left!.setRight(node);
        node.setParent(left);
    }

    remove(key: k): boolean {
        let node = this.search(key);
        if (node === null) {
            return false;
        } else {
            this.deleteNode(node);
            return true;
        }
    }

    deleteNode(node: Node<k, T>) {
        let y = node;
        let x: Node<k, T> | null;
        let yOriginalColor = y.isRed();
        if (node.getLeft() === null) {
            x = node.getRight();
            this.transplant(node, node.getRight());
        } else if (node.getRight() === null) {
            x = node.getLeft();
            this.transplant(node, node.getLeft());
        } else {
            y = this.minimum(node.getRight()!);
            yOriginalColor = y.isRed();
            x = y.getRight();
            if (y.getParent() === node) {
                if (x !== null) {
                    x.setParent(y);
                }
            } else {
                this.transplant(y, y.getRight());
                y.setRight(node.getRight());
                y.getRight()!.setParent(y);
            }
            this.transplant(node, y);
            y.setLeft(node.getLeft());
            y.getLeft()!.setParent(y);
            y.setRed(node.isRed());
        }
        if (!yOriginalColor) {
            this.deleteFixup(x);
        }
    }

    deleteFixup(node: Node<k, T> | null) {
        while (node !== this._root && node !== null && !node.isRed()) {
            if (node === node.getParent()!.getLeft()) {
                let w = node.getParent()!.getRight();
                if (w!.isRed()) {
                    w!.setRed(false);
                    node.getParent()!.setRed(true);
                    this.rotateLeft(node.getParent()!);
                    w = node.getParent()!.getRight();
                }
                if (!w!.getLeft()!.isRed() && !w!.getRight()!.isRed()) {
                    w!.setRed(true);
                    node = node.getParent();
                } else {
                    if (!w!.getRight()!.isRed()) {
                        w!.getLeft()!.setRed(false);
                        w!.setRed(true);
                        this.rotateRight(w!);
                        w = node.getParent()!.getRight();
                    }
                    w!.setRed(node.getParent()!.isRed());
                    node.getParent()!.setRed(false);
                    w!.getRight()!.setRed(false);
                    this.rotateLeft(node.getParent()!);
                    node = this._root;
                }
            } else {
                let w = node.getParent()!.getLeft();
                if (w!.isRed()) {
                    w!.setRed(false);
                    node.getParent()!.setRed(true);
                    this.rotateRight(node.getParent()!);
                    w = node.getParent()!.getLeft();
                }
                if (!w!.getRight()!.isRed() && !w!.getLeft()!.isRed()) {
                    w!.setRed(true);
                    node = node.getParent();
                } else {
                    if (!w!.getLeft()!.isRed()) {
                        w!.getRight()!.setRed(false);
                        w!.setRed(true);
                        this.rotateLeft(w!);
                        w = node.getParent()!.getLeft();
                    }
                    w!.setRed(node.getParent()!.isRed());
                    node.getParent()!.setRed(false);
                    w!.getLeft()!.setRed(false);
                    this.rotateRight(node.getParent()!);
                    node = this._root;
                }
            }
        }
        if (node !== null) {
            node.setRed(false);
        }
    }

    minimum(node: Node<k, T>): Node<k, T> {
        while (node.getLeft() !== null) {
            node = node.getLeft()!;
        }
        return node;
    }

    transplant(u: Node<k, T>, v: Node<k, T> | null) {
        if (u.getParent() === null) {
            this._root = v;
        } else if (u === u.getParent()!.getLeft()) {
            u.getParent()!.setLeft(v);
        } else {
            u.getParent()!.setRight(v);
        }
        if (v !== null) {
            v.setParent(u.getParent());
        }
    }

    printTree(prefix: String = "", Node: Node<k,T> | null = this._root, isLeft: boolean = true) {
        if (Node !== null) {
            this.printTree(
                prefix === "" ?
                    prefix + (isLeft ? "    " : "    ") :
                    prefix + (isLeft ? "│   " : "    "),
                Node!.getRight(), false);
            console.log((
                prefix === "" ?
                prefix + "─── " : prefix + (isLeft ? "└── " : "┌── ")) +
                Node!.getValue() + (Node!.isRed() ? " (red)" : " (black)")
            );
            this.printTree(prefix + (isLeft ? "    " : "│   "), Node!.getLeft(), true);
        }
    }

    getMaxDepth(node: Node<k, T> | null): number {
        if (node === null) {
            return 0;
        } else {
            let lDepth = this.getMaxDepth(node.getLeft());
            let rDepth = this.getMaxDepth(node.getRight());
            if (lDepth > rDepth) {
                return lDepth + 1;
            } else {
                return rDepth + 1;
            }
        }
    }

    printNodeTree(node: Node<k, T> | null, indent: string) {
        if (node !== null) {
            if (node === this._root) {
                console.log(node.getKey()!, node.isRed() ? "Red" : "Black");
                this.printNodeTree(node.getLeft(), indent + "    ");
                this.printNodeTree(node.getRight(), indent + "    ");
            }
            else {
                if (node === node.getParent()!.getLeft() && node.getParent()!.getRight() !== null) {
                    console.log(`${indent}|\n${indent}|_________\n${indent}|         |\n${indent}|         |\n${indent}${node.getKey()!}${node.isRed() ? "(Red)" : "(Black)"}  ${node.getParent()!.getRight()!.getKey()!}${node.getParent()!.getRight()!.isRed() ? "(Red)" : "(Black)"}`);
                    this.printNodeTree(node.getLeft(), indent + "    ");
                    this.printNodeTree(node.getRight(), indent + "    ");
                }//  else if (node === node.getParent()!.getRight() && node.getParent()!.getLeft() !== null) { 
                //     console.log("|\n|_________\n|         |\n|         |\n" + node.getParent()!.getLeft()!.getKey()!, node.getParent()!.getLeft()!.isRed() ? "(Red)" : "(Black)" + "  " + node.getKey()!, node.isRed() ? "(Red)" : "(Black)");
                //     this.printNodeTree(node.getLeft(), indent + "    ");
                //     this.printNodeTree(node.getRight(), indent + "    ");
                // }
                // else {
                //     console.log("|\n-------\n|\n|\n" + node.getKey()!, node.isRed() ? "Red" : "Black");
                //     this.printNodeTree(node.getLeft(), indent + "");
                //     this.printNodeTree(node.getRight(), indent + "");
                // }
            }
        }
    }

    print() {
        if (this._root !== null) {
            this.printNode(this._root);
        }
    }

    printNode(node: Node<k, T> | null) {
        if (node !== null) {
            this.printNode(node.getLeft());
            console.log(node.getValue(), node.isRed() ? "Red" : "Black");
            this.printNode(node.getRight());
        }
    }

    search(key: k): Node<k, T> | null {
        return this.searchNode(this._root, key);
    }

    searchNode(node: Node<k, T> | null, key: k): Node<k, T> | null {
        if (node === null) {
            return null;
        } else if (key < node.getKey()!) {
            return this.searchNode(node.getLeft(), key);
        } else if (key > node.getKey()!) {
            return this.searchNode(node.getRight(), key);
        } else {
            return node;
        }
    }
}
