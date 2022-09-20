import { BaseLinkedList } from "./Base/BaseLinkedList";

class SortAbleLinkedList extends BaseLinkedList {

    public bubbleSort() {
        for (let i = 0; i < this._lenght; i++) {
            for (let j = 0; j < this._lenght - i - 1; j++) {
                let node1 = this.find(j);
                if (node1!.getValue() > node1!.getNext()!.getValue()) {
                    this.swapNode(node1, node1?.getNext());
                }
            }
        }
    }

    public selectionSort() {
        let currentNode, minimum, nextMinimum;
        for (let i = 0; i < this._lenght; i++) {
            //save latest sorted minimum
            currentNode = this.find(i);
            minimum = currentNode;
            nextMinimum = currentNode?.getNext();
            while (nextMinimum?.getNext()) {
                if (nextMinimum!.getValue() < minimum!.getValue()) {
                    minimum = nextMinimum;
                }
                nextMinimum = nextMinimum?.getNext();
            }
            this.swapNode(currentNode, minimum);
        }
    }

    public insertionSort() {
            for (let i = 1; i < this._lenght; i++){
                let currentNode = this.pop(i);
                let prevNode = currentNode?.getPrev();
                let insertIndex = i-1;
                while (insertIndex >= 0 && currentNode!.getValue() < prevNode!.getValue()){
                    insertIndex--;
                    prevNode = prevNode?.getPrev();
                }
                this.insertNode(currentNode, insertIndex + 1);
            }
        
    }
}

function performanceTest(sortingFunction: () => void) {
    let startTime = performance.now()
    sortingFunction();
    console.log(`Waktu yang dibutuhkan: ${performance.now() - startTime} ms`);
}

try {
    let linkedList = new SortAbleLinkedList();
    // console.log("----Init LinkedList----");
    // console.log("sebelum bubble sort");
    linkedList.add(-20);
    linkedList.add(5);
    linkedList.add(2);
    linkedList.add(7);
    linkedList.add(-5);
    linkedList.add(43);
    linkedList.add(-9);
    linkedList.add(-1);
    linkedList.add(11);
    linkedList.add(8);
    linkedList.insert(2, linkedList._lenght);
    
    // linkedList.ShowAll();
    // console.log("Setelah bubble sort");
    // linkedList.bubbleSort();
    // linkedList.ShowAll();
    // console.log("Setelah selection sort");
    // linkedList.selectionSort();
    // linkedList.ShowAll();
    // console.log("Setelah insertion sort");
    linkedList.insertionSort();
    linkedList.ShowAll();
} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

