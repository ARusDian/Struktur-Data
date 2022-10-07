// Run: tsc index.ts && node index.js
// import { SimpleSortAbleLinkedList } from "./Sorts/SimpleSort";
// import { SoalLinkedList } from "./Praktikum/SoalLinkedList";
import { BaseLinkedList } from "./Base/BaseLinkedList";
import { SingleLinkedList } from "./Base/SingleLinkedList";
import {AdvancedSortableLinkedList} from "./Sorts/AdvancedSort";

function performanceTest(sortingFunction: () => void) {
    let startTime = performance.now()
    sortingFunction();
    console.log(`Waktu yang dibutuhkan: ${performance.now() - startTime} ms`);
}

try {
    let linkedList = new BaseLinkedList();
    console.log("----Init LinkedList----");
    linkedList.add(20);
    linkedList.add(1);
    linkedList.printAsArray();
    linkedList.remove(2);
    linkedList.printAsArray();
    linkedList.exchange(0, 2); 
    linkedList.printAsArray();


} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

