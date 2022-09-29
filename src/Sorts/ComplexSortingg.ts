import { BaseLinkedList } from "../Base/BaseLinkedList";
import {SimpleSortAbleLinkedList} from "../Sorts/SimpleSort";
export class complex_sortableLinkedList extends BaseLinkedList {
    public shellSort() {
        let gap = Math.floor(this._lenght/2);

        //ATTEMPT 1

        // while (gap > 0) {
        //     for (let i = gap; i < this._lenght; i++) {
        //         let temp = this.find(i);

        //         if (this.find(i - gap)!.getValue() > temp!.getValue()) {
        //             this.swapNode(this.find(i - gap), temp);
        //         }
        //         // for (let j = i; j >= gap && this.find(j - gap)!.getValue() > temp!.getValue(); j -= gap) {
        //         //     this.swapNode(this.find(j-gap),temp);
        //         // }
        //         console.log(`Gap = ${gap}`);
        //         this.printAsArray();
        //     }
        //     gap = Math.floor(gap/2);
        // }


        // ATTEMPT 2

        let length = this._lenght;
        for (gap = Math.floor(length/2); gap > 0; gap = Math.floor(gap/2)) {
            let subSet = 1;

            for (let i = gap; i < length; i++) {
                // let temp = this.find(i);

                if (this.find(i - gap)!.getValue() > this.find(i)!.getValue()) {
                    this.exchange((i - gap), i);
                }
                console.log(`\nGap = ${gap}, subSet that's being checked = ${subSet}`);
                this.printAsArray();
                subSet++;
            }
        }
        console.log("\nFinal Sorted List");
        this.printAsArray();

    }
}