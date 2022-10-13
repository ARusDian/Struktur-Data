// Run: tsc index.ts && node index.js
// import { SimpleSortAbleLinkedList } from "./Sorts/SimpleSort";
// import { SoalLinkedList } from "./Praktikum/SoalLinkedList";
// import { BaseLinkedList } from "./Base/BaseLinkedList";
import { AdvancedSortableLinkedList } from "./Sorts/AdvancedSort";

function performanceTest(sortingFunction: () => void) {
    let startTime = performance.now()
    sortingFunction();
    console.log(`Waktu yang dibutuhkan: ${performance.now() - startTime} ms`);
}

try {
    let linkedList = new AdvancedSortableLinkedList();
    linkedList.generateRandomList(10);
    linkedList.printAsArray();
    linkedList.shellSort(true);
    linkedList.printAsArray();


} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

