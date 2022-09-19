import { BaseLinkedList } from "./Base/BaseLinkedList";

class SortAbleLinkedList extends BaseLinkedList {

    public bubbleSort() {
        for (let i = 0; i < this._lenght; i++) {
            let currentNode = this._first;
            let isSwapped = false;
            let nodeIndex = 0;
            while (currentNode?.getNext()) {
                if (currentNode!.getValue() > currentNode!.getNext()!.getValue()) {
                    this.exchange(nodeIndex, nodeIndex + 1);
                    isSwapped = true;
                }
                currentNode = currentNode?.getNext();
                nodeIndex++;
            }
            if (isSwapped === false) {
                break;
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
            while(nextMinimum?.getNext()){
                if (nextMinimum!.getValue() < minimum!.getValue()) {
                    minimum = nextMinimum;
                }
                nextMinimum = nextMinimum?.getNext();
            }
            this.swapNode(currentNode, minimum);
        }
    }

    public insertionSort() {
        for (let i = 1; i < this._lenght; i++) {
            let poppedNode = this.find(i);
            let insertIndex = i - 1;
            while (insertIndex >= 0 && poppedNode!.getValue() < poppedNode!.getPrev()!.getValue()) {
                insertIndex--;
            }
            this.insert(poppedNode!.getValue(), insertIndex + 1);
            this.remove(i + 1);
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
    linkedList.add(5);
    linkedList.add(2);
    linkedList.add(7);
    linkedList.add(-5);
    linkedList.add(-9);
    linkedList.add(-1);
    linkedList.add(8);
    linkedList.add(11);
    linkedList.add(-20);
    linkedList.add(43);
    // linkedList.ShowAll();
    // linkedList.ShowAll();
    // console.log("Setelah bubble sort");
    // linkedList.bubbleSort();
    // linkedList.ShowAll();
    // console.log("Setelah selection sort");
    // linkedList.selectionSort();
    // linkedList.ShowAll();
    console.log("Setelah insertion sort");
    linkedList.insertionSort();
    linkedList.ShowAll();
} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

//   console.log(
//     "setelah .insert node baru pada index tertentu('aaa', pada index 3)"
//   );
//   linkedList.insert("aaa", 0);
//   linkedList.ShowAll();

//   console.log("setelah .reve node pada index 2");
//   linkedList.remove(2);
//   linkedList.ShowAll();

//   console.log("setelah .exchange index 1 dengan 4");
//   linkedList.exchange(1, 4);
//   linkedList.ShowAll();

//   console.log(
//     "mencari informasi tentang suatu node pada index tertentu dengan metode .find"
//   );
//   console.log(linkedList.find(2));
