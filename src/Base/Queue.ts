import { Node } from "./Node";

export class Queue {
    private _first: Node | undefined;

    public hasPop() {
        return Boolean(this._first);
    }

    public push(value: any) {
        let newNode = new Node(value);
        if (this.hasPop()) {
            let currentNode = this._first;
            while (currentNode?.getNext()) {
                currentNode = currentNode?.getNext();
            }
            currentNode?.setNext(newNode);
        } else {
            this._first = newNode;
        }
    }

    public pop(index?: number): Node | undefined {
        if (this.hasPop()) {
            let currentNode = this._first;
            if (!index) {
                this._first = this._first?.getNext();
                return currentNode;
            } else {
                if (index < 0) {
                    throw new Error("Cant pop with negative index");
                }
                let prevNode = currentNode;

                for (let i = 0; i < index; i++) {
                    prevNode = currentNode;
                    currentNode = currentNode?.getNext();
                }
                prevNode?.setNext(currentNode?.getNext());
                return currentNode;
            }
        } else {
            throw new Error("There's nothing to pop!");
        }
    }

    public showAll() {
        let currentNode = this._first;
        console.log("Queue");
        while (currentNode?.getNext()) {
            console.log(
                `${currentNode.getValue()} || ${currentNode.getNext()?.getValue()}`
            );
            currentNode = currentNode.getNext();
        }
    }
}
