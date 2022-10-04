import { SimpleSortAbleLinkedList } from "./SimpleSort";
export class AdvancedSortableLinkedList extends SimpleSortAbleLinkedList {
    public shellSort(showProcess: boolean = false) {
        // let gap = Math.floor(this._lenght / 2);
        // while (gap > 0) {
        //     let subSet = 0;
        //     for (let i = gap; i < this._lenght; i++) {
        //         let temp = this.find(i);
        //         subSet++;
        //         for (let j = i; j >= gap && this.find(j - gap)!.getValue() > temp!.getValue(); j -= gap) {
        //             this.swapNode(this.find(j - gap), temp);
        //         }
        //         showProcess ? console.log(`\nGap = ${gap}, subSet that's being checked = ${subSet}`) : null
        //         showProcess ? this.printAsArray() : null;
        //     }
        //     gap = Math.floor(gap / 2);
        // }
        // showProcess ? console.log("\nFinal Sorted List") : null;
        // showProcess ? this.printAsArray() : null;
        for (let gap = Math.floor(this._lenght / 2); gap > 0; gap = Math.floor(gap / 2)) {
            if (gap == 1) {
                showProcess ? this.printAsArray() : null;
                showProcess ? console.log(`\nGap = ${gap} is 1, doing insertion sort`) : null;
                this.insertionSort();
                break
            }
            for(let i = gap; i < this._lenght; i++) {
                let temp = this.find(i);
                showProcess ? console.log(`\nGap = ${gap}, subSet that's being checked = ${i}`) : null;
                showProcess ? console.log(`checking ${temp!.getValue()} with ${this.find(i - gap)!.getValue()}`) : null;
                for (let j = i; j >= gap && this.find(j - gap)!.getValue() > temp!.getValue(); j -= gap) {
                    showProcess ? console.log(`\nSwapping ${this.find(j - gap)!.getValue()} with ${temp!.getValue()}`) : null;
                    this.swapNode(this.find(j - gap), temp);
                    showProcess ? this.printAsArray() : null;
                }
            }
        }
    }
}
