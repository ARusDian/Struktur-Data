import { NodeData } from "./Node";

export class BaseLinkedList {
    public _first?: NodeData;
    public _last?: NodeData;
    public _lenght = 0;

    public ShowAll() {
        let currentNode = this._first;
        for (let i = 0; i < this._lenght; i++) {
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

    public find(index: number): NodeData | undefined {
        let currentNode: NodeData | undefined;
        if (index === 0 || index === -Math.abs(this._lenght)) {
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

    public add(value: number): NodeData {
        const newNode = new NodeData(value);
        if (this._lenght === 0) {
            this._first = this._last = newNode;
        } else {
            newNode.setPrev(this._last);
            this._last?.setNext(newNode);
            this._last = newNode;
        }
        this._lenght++;
        return newNode;
    }

    public insert(value: number, index: number) {
        if (index > this._lenght || index < -Math.abs(this._lenght + 1)) {
            throw new Error("Input index is bigger than the current length");
        }
        if (index === this._lenght || index === -1) {
            return this.add(value);
        }
        let newNode = new NodeData(value);
        if (index === 0) {
            newNode.setNext(this._first);
            this._first?.setPrev(newNode);
            this._first = newNode;
        } else if (index === -Math.abs(this._lenght)) {
            this.add(value);
        } else {
            let currentNode: NodeData | undefined;
            currentNode = this.find(index);
            const prevNode = currentNode?.getPrev();
            newNode.setPrev(prevNode);
            newNode.setNext(currentNode);
            prevNode?.setNext(newNode);
            currentNode?.setPrev(newNode);
        }
        this._lenght++;
        return newNode;
    }

    public remove(index: number) {
        if (index > this._lenght || index < -Math.abs(this._lenght)) {
            throw new Error("Input index is bigger than the current length");
        }
        if (index === 0 || index === -Math.abs(this._lenght)) {
            this._first = this._first?.getNext();
            this._first?.setPrev(undefined);
        } else {
            let pointerNode: NodeData | undefined;
            pointerNode = this.find(index);
            pointerNode?.getPrev()?.setNext(pointerNode.getNext());
            let newPrevNode = pointerNode?.getPrev();
            let nextNode = pointerNode?.getNext();
            nextNode?.setPrev(newPrevNode);
        }
        this._lenght--;
    }

    public exchange(index1: number, index2: number) {
        if (index1 > this._lenght - 1 || index2 > this._lenght - 1) {
            throw new Error("Input index is bigger than the current length");
        }

        if (index1 < 0 || index2 < 0) {
            throw new Error("Input index can't be negative");
        }

        let pointerNode1: NodeData | undefined;
        pointerNode1 = this.find(index1);
        let pointerNode2: NodeData | undefined;
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
}
