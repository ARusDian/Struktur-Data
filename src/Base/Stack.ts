import { Node } from "./Node";
export class Stack {
    private _first: Node | undefined;

    public hasPop() {
        return this._first !== undefined;
    }

    public showAll() {
        let currentNode = this._first;
        console.log("Stack");
        while (currentNode?.getNext()) {
            console.log(
                `${currentNode.getValue()} || ${currentNode.getNext()?.getValue()}`
            );
            currentNode = currentNode.getNext();
        }
    }

    public push(value: any) {
        if (this.hasPop()) {
            let newNode = new Node(value);
            let tempNode = this._first;
            this._first = newNode;
            this._first.setNext(tempNode);
        } else {
            this._first = new Node(value);
        }
    }
    public pop(index?: number): Node | undefined {
        if (this.hasPop()) {
            let currentNode = this._first;
            if (!index) {
                this._first = currentNode?.getNext();
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
}
