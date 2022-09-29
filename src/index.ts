// Run: tsc index.ts && node index.js
// import { SimpleSortAbleLinkedList } from "./Sorts/SimpleSort";
// import { SoalLinkedList } from "./Praktikum/SoalLinkedList";
import {complex_sortableLinkedList} from "./Sorts/ComplexSortingg";

function performanceTest(sortingFunction: () => void) {
    let startTime = performance.now()
    sortingFunction();
    console.log(`Waktu yang dibutuhkan: ${performance.now() - startTime} ms`);
}

try {
    let linkedList = new complex_sortableLinkedList();
    console.log("----Init LinkedList----");
    linkedList.add(20);
    linkedList.add(1);
    linkedList.add(5);
    linkedList.add(2);
    linkedList.add(7);
    linkedList.add(-5);
    linkedList.add(43);
    linkedList.add(-9);
    linkedList.add(-1);
    linkedList.add(11);
    linkedList.add(0);
    linkedList.add(8);
    linkedList.printAsArray();
    console.log("----Setelah shell sorting----");
    linkedList.shellSort();
    // linkedList.printAsArray();


} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

