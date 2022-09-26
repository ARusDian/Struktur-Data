import { BaseLinkedList } from "../Base/BaseLinkedList";

export class SimpleSortAbleLinkedList extends BaseLinkedList {

    public bubbleSort() {
        console.log("---Bubble Sort---");
        for (let i = 0; i < this._lenght; i++) {
            for (let j = 0; j < this._lenght - i - 1; j++) {
                let node1 = this.find(j);
                let node2 = node1?.getNext();
                if (node1!.getValue() > node2!.getValue()) {
                    this.swapNode(node1, node2);
                }
            
            }
            this.printAsArray();
        }
    }

    public selectionSort() {
        let currentNode, minimum, nextMinimum;
        for (let i = 0; i < this._lenght; i++) {
            currentNode = this.find(i);
            minimum = currentNode;
            nextMinimum = minimum!.getNext();
            while (nextMinimum) {
                if (minimum!.getValue() > nextMinimum.getValue()) {
                    minimum = nextMinimum;
                }
                nextMinimum = nextMinimum.getNext();
            }
            this.swapNode(currentNode, minimum);
            this.printAsArray();
        }
    }

    public insertionSort() {
        for (let i = 1; i < this._lenght; i++) {
            let currentNode = this.pop(i);
            let prevNode = currentNode?.getPrev();
            let insertIndex = i - 1;
            while (insertIndex >= 0 && currentNode!.getValue() < prevNode!.getValue()) {
                insertIndex--;
                prevNode = prevNode?.getPrev();
            }
            this.insertNode(currentNode, insertIndex + 1);
            this.printAsArray();
        }
    }
}
