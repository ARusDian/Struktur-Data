import { BaseLinkedList } from "./Base/BaseLinkedList";

class SortAbleLinkedList extends BaseLinkedList {
    public bubbleSort() {
        let isSwapped = false;
        for (let i = 0; i < this._lenght; i++) {
            let currentNode = this._first;
            isSwapped = false;
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
        for (let i = 0; i < this._lenght; i++) {
            let currentMinNode = this.find(i);
            let currentMinIndex = i;
            let j = i + 1;
            while (currentMinNode?.getNext()) {
                if (currentMinNode!.getValue() > currentMinNode.getNext()!.getValue()) {
                    currentMinIndex = j;
                }
                currentMinNode = currentMinNode?.getNext();
                j++;
            }
            this.exchange(currentMinIndex, i)
        }
    }

    public insertionSort() {
        for (let i = 1; i < this._lenght; i++) {
            let currentNode = this.find(i);
            let j = i - 1;
            while (j >= 0 && currentNode!.getValue() < this.find(j)!.getValue()) {
                this.exchange(j, j + 1);
                j--;
            }
        }
    }
}


try {
    let linkedList = new SortAbleLinkedList();
    console.log("----Init LinkedList----");
    console.log("sebelum bubble sort");
    linkedList.add(-5);
    linkedList.add(5);
    linkedList.add(2);
    linkedList.add(7);
    linkedList.add(-9);
    linkedList.add(-1);
    linkedList.add(8);
    linkedList.ShowAll();
    // console.log("Setelah bubble sort");
    // linkedList.bubbleSort();
    // linkedList.ShowAll();
    // console.log("Setelah selection sort");
    // linkedList.selectionSort();
    // linkedList.ShowAll();
    console.log("Setelah insertion sort");
    linkedList.selectionSort();
    linkedList.ShowAll();
    // let a: number;
    // let b: number;
    // a = -1;
    // b = -3;
    // console.log(b < a);
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
