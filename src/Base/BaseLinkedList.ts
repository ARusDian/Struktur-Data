import { Node } from "./Node";

export class BaseLinkedList {
    private _first?: Node;
    private _last?: Node;
    public _length = 0;

    public clearNodes() {
        this._first = undefined;
        this._last = undefined;
        this._length = 0;
    }

    public showAll() {
        let currentNode = this._first;
        for (let i = 0; i < this._length; i++) {
            console.log(
                `
        Node Index: ${i}
          PrevNode : ${currentNode?.getPrev()?.getValue()} 
          Value : ${currentNode?.getValue()} 
          NextNode:${currentNode?.getNext()?.getValue()}`
            );
            currentNode = currentNode?.getNext();
        }
    }

    public printAsArray() {
        let currentNode = this._first;
        let array: number[] = [];
        for (let i = 0; i < this._length; i++) {
            array.push(currentNode?.getValue() as number);
            currentNode = currentNode?.getNext();
        }
        console.log(array.toString());
    }

    public generateRandomList(size: number) { 
        for (let i = 0; i < size; i++) {
            this.add(Math.floor(Math.random() * 100));
        }
    }

    public find(index: number): Node | undefined {
        let currentNode: Node | undefined;
        if (index === 0 || index === -Math.abs(this._length)) {
            return this._first;
        }
        if (index > 0) {
            currentNode = this._first;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode?.getNext();
            }
        } else {
            currentNode = this._last;
            for (let i = -1; i > index; i--) {
                currentNode = currentNode?.getPrev();
            }
        }
        if (currentNode === undefined) {
            throw new Error("Node Not Found");
        }
        return currentNode;
    }

    public add(value: number){
        const newNode = new Node(value);
        if (this._length === 0) {
            this._first = this._last = newNode;
        } else {
            newNode.setPrev(this._last);
            this._last?.setNext(newNode);
            this._last = newNode;
        }
        this._length++;
    }

    public addNode(value: Node){
        if (this._length === 0) {
            this._first = this._last = value;
        } else {
            value.setPrev(this._last);
            this._last?.setNext(value);
            this._last = value;
        }
        this._length++;
    }

    public insert(value: number, index: number) {
        if (index > this._length || index < -Math.abs(this._length + 1)) {
            throw new Error("Input index is bigger than the current length");
        }
        if (index === this._length || index === -1) {
            return this.add(value);
        }
        let newNode = new Node(value);
        if (index === 0) {
            newNode.setNext(this._first);
            this._first?.setPrev(newNode);
            this._first = newNode;
        } else if (index === -Math.abs(this._length)) {
            this.add(value);
        } else {
            let currentNode: Node | undefined;
            currentNode = this.find(index);
            const prevNode = currentNode?.getPrev();
            newNode.setPrev(prevNode);
            newNode.setNext(currentNode);
            prevNode?.setNext(newNode);
            currentNode?.setPrev(newNode);
        }
        this._length++;
    }

    public insertNode(value: Node | undefined, index: number) {
        if (value === undefined) { 
            throw new Error("Node is undefined");
        }
        if (index > this._length || index < -Math.abs(this._length + 1)) {
            throw new Error("Input index is bigger than the current length");
        }
        if (index === this._length || index === -1) {
            return this.addNode(value);
        }
        if (index === 0) {
            value.setNext(this._first);
            this._first?.setPrev(value);
            this._first = value;
        }
        else if (index === -Math.abs(this._length)) {
            this.addNode(value);
        }else {
            let currentNode: Node | undefined;
            currentNode = this.find(index);
            const prevNode = currentNode?.getPrev();
            value.setPrev(prevNode);
            value.setNext(currentNode);
            prevNode?.setNext(value);
            currentNode?.setPrev(value);
        }
        this._length++;
    }

    public remove(index: number) {
        if (index > this._length || index < -Math.abs(this._length)) {
            throw new Error("Input index is bigger than the current length");
        }
        if (index === 0 || index === -Math.abs(this._length)) {
            this._first = this._first?.getNext();
            this._first?.setPrev(undefined);
        } else {
            let pointerNode: Node | undefined;
            pointerNode = this.find(index);
            pointerNode?.getPrev()?.setNext(pointerNode.getNext());
            let newPrevNode = pointerNode?.getPrev();
            let nextNode = pointerNode?.getNext();
            nextNode?.setPrev(newPrevNode);
        }
        this._length--;
    }

    public pop(index?: number): Node | undefined {
        if (this._first !== undefined) {
            if (index === undefined) {
                let lastNode = this._last;
                this._last = this._last?.getPrev();
                this._last?.setNext(undefined);
                this._length--;
                return lastNode;
            } else {
                if (index > this._length || index < -Math.abs(this._length)) {
                    throw new Error("Input index is bigger than the current length");
                }
                if (index === 0 || index === -Math.abs(this._length)) {
                    let firstNode = this._first;
                    this._first = this._first?.getNext();
                    this._first?.setPrev(undefined);
                    this._length--;
                    return firstNode;
                } else {
                    let pointerNode: Node | undefined;
                    pointerNode = this.find(index);
                    pointerNode?.getPrev()?.setNext(pointerNode.getNext());
                    let newPrevNode = pointerNode?.getPrev();
                    let nextNode = pointerNode?.getNext();
                    nextNode?.setPrev(newPrevNode);
                    this._length--;
                    return pointerNode;
                }
            }
        } else {
            throw new Error("There's nothing to pop!");
        }
    }

    public exchange(index1: number, index2: number) {
        if (index1 > this._length - 1 || index2 > this._length - 1) {
            throw new Error("Input index is bigger than the current length");
        }

        if (index1 < 0 || index2 < 0) {
            throw new Error("Input index can't be negative");
        }

        let pointerNode1: Node | undefined;
        pointerNode1 = this.find(index1);
        let pointerNode2: Node | undefined;
        pointerNode2 = this.find(index2);

        if (pointerNode1 === this._first) {
            this._first = pointerNode2;
        } else if (pointerNode2 === this._first) {
            this._first = pointerNode1;
        }
        if (pointerNode1 === this._last) {
            this._last = pointerNode2;
        } else if (pointerNode2 === this._last) {
            this._last = pointerNode1;
        }

        let tempNode = pointerNode1?.getNext();
        pointerNode1?.setNext(pointerNode2?.getNext());
        pointerNode2?.setNext(tempNode);

        if (pointerNode1?.getNext()) {
            pointerNode1.getNext()?.setPrev(pointerNode1);
        }
        if (pointerNode2?.getNext()) {
            pointerNode2.getNext()?.setPrev(pointerNode2);
        }

        tempNode = pointerNode1?.getPrev();
        pointerNode1?.setPrev(pointerNode2?.getPrev());
        pointerNode2?.setPrev(tempNode);

        if (pointerNode1?.getPrev()) {
            pointerNode1.getPrev()?.setNext(pointerNode1);
        }
        if (pointerNode2?.getNext()) {
            pointerNode2.getPrev()?.setNext(pointerNode2);
        }
    }

    public swapNode(node1: Node | undefined, node2: Node | undefined) {
        if (!node1 && node2) {
            throw new Error("node is undefined");
        }
        if (node1 === this._first) {
            this._first = node2;
        } else if (node2 === this._first) {
            this._first = node1;
        }
        if (node1 === this._last) {
            this._last = node2;
        } else if (node2 === this._last) {
            this._last = node1;
        }

        let tempNode = node1?.getNext();
        node1?.setNext(node2?.getNext());
        node2?.setNext(tempNode);

        if (node1?.getNext()) {
            node1.getNext()?.setPrev(node1);
        }
        if (node2?.getNext()) {
            node2.getNext()?.setPrev(node2);
        }

        tempNode = node1?.getPrev();
        node1?.setPrev(node2?.getPrev());
        node2?.setPrev(tempNode);

        if (node1?.getPrev()) {
            node1.getPrev()?.setNext(node1);
        }
        if (node2?.getNext()) {
            node2.getPrev()?.setNext(node2);
        }
    }
}
