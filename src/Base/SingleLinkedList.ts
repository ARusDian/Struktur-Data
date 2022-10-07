export class Node {
    private _value: number;
    private _next?: Node;
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
}

export class SingleLinkedList {
    public _first?: Node;
    public _last?: Node;
    public _lenght = 0;

    public clearNodes() {
        this._first = undefined;
        this._last = undefined;
        this._lenght = 0;
    }

    public showAll() {
        let currentNode = this._first;
        for (let i = 0; i < this._lenght; i++) {
            console.log(
                `
        Node Index: ${i}
          Value : ${currentNode?.getValue()} 
          NextNode:${currentNode?.getNext()?.getValue()}`
            );
            currentNode = currentNode?.getNext();
        }
    }

    public printAsArray() {
        let currentNode = this._first;
        let array: number[] = [];
        for (let i = 0; i < this._lenght; i++) {
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
        if (index === 0 || index === -Math.abs(this._lenght)) {
            return this._first;
        }
        if (index > 0) {
            currentNode = this._first;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode?.getNext();
            }
        }
        if (currentNode === undefined) {
            throw new Error("Node Not Found");
        }
        return currentNode;
    }

    public add(value: number) {
        const newNode = new Node(value);
        if (this._lenght === 0) {
            this._first = this._last=  newNode;
        } else {
            this._last?.setNext(newNode);
            this._last = newNode;
        }
        this._lenght++;
    }

    public insert(value: number, index: number) {
        if (index > this._lenght ) {
            throw new Error("Input index is bigger than the current length");
        }
        if (index === this._lenght) {
            return this.add(value);
        }
        let newNode = new Node(value);
        if (index === 0) {
            newNode.setNext(this._first);
            this._first = newNode;
        } else {
            let currentNode: Node | undefined;
            currentNode = this.find(--index);
            let tempNode = currentNode?.getNext();
            currentNode?.setNext(newNode);
            newNode.setNext(tempNode);
        }
        this._lenght++;
    }

    public remove(index: number) {
        if (index > this._lenght || index < -Math.abs(this._lenght)) {
            throw new Error("Input index is bigger than the current length");
        }
        if (index === 0 || index === -Math.abs(this._lenght)) {
            this._first = this._first?.getNext();
        } else {
            let pointerNode: Node | undefined;
            pointerNode = this.find(--index);
            pointerNode?.setNext(pointerNode?.getNext()?.getNext());
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

        let prevNode1: Node | undefined
        let prevNode2: Node | undefined
        let pointerNode1 = this._first;
        let pointerNode2 = this._first;
        let i1 = 0
        let i2 = 0
        while (i1 < index1) {
            prevNode1 = pointerNode1;
            pointerNode1 = pointerNode1?.getNext();
            i1++
        }
        while (i2 < index2) {
            prevNode2 = pointerNode2;
            pointerNode2 = pointerNode2?.getNext()
            i2++
        }
        if (pointerNode1 && pointerNode2) {
            if (prevNode1) {
                prevNode1.setNext(pointerNode2);
            } else {
                this._first = pointerNode2;
            }
            if (prevNode2) {
                prevNode2.setNext(pointerNode1)
            } else {
                this._first = pointerNode1;
            }

            let tempNode = pointerNode1?.getNext();
            pointerNode1?.setNext(pointerNode2?.getNext());
            pointerNode2?.setNext(tempNode);
            console.log(tempNode?.getValue())
        }
    }
}
