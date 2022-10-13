import { SimpleSortAbleLinkedList } from "./SimpleSort";
export class AdvancedSortableLinkedList extends SimpleSortAbleLinkedList {

    public shellSort(showProcess: boolean = false) {
        for (let gap = Math.floor(this._length / 2); gap > 0; gap = Math.floor(gap / 2)) {
            if (gap == 1) {
                showProcess ? this.printAsArray() : null;
                showProcess ? console.log(`\nGap = ${gap}, insertion sort begin!`) : null;
                this.insertionSort();
                break
            }
            for(let i = gap; i < this._length; i++) {
                let temp = this.find(i);
                let isSwapped = false;
                showProcess ? console.log(`\nGap = ${gap}, subSet that's being checked = ${i}`) : null;
                showProcess ? console.log(`checking ${this.find(i - gap)!.getValue()} with ${temp!.getValue()} `) : null;
                for (let j = i; j >= gap && this.find(j - gap)!.getValue() > temp!.getValue(); j -= gap) {
                    isSwapped = true;
                    showProcess ? console.log(`\nSwapping ${this.find(j - gap)!.getValue()} with ${temp!.getValue()}`) : null;
                    this.swapNode(this.find(j - gap), temp);
                    showProcess ? this.printAsArray() : null;
                }
                showProcess && !isSwapped ? console.log('not swapped') : null ;
            }
        }
    }
}
