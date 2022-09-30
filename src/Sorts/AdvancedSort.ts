import { BaseLinkedList } from "../Base/BaseLinkedList";
export class AdvancedSortableLinkedList extends BaseLinkedList {
    public shellSort(showProcess: boolean = false) {
        let gap = Math.floor(this._lenght / 2);
        while (gap > 0) {
            let subSet = 0;
            for (let i = gap; i < this._lenght; i++) {
                let temp = this.find(i);
                subSet++;
                for (let j = i; j >= gap && this.find(j - gap)!.getValue() > temp!.getValue(); j -= gap) {
                    this.swapNode(this.find(j - gap), temp);
                }
                showProcess ? console.log(`\nGap = ${gap}, subSet that's being checked = ${subSet}`) : null
                showProcess ? this.printAsArray() : null;
            }
            gap = Math.floor(gap / 2);
        }
        showProcess ? console.log("\nFinal Sorted List") : null;
        showProcess ? this.printAsArray() : null;
    }
}
