// Run: tsc index.ts && node index.js
import { SimpleSortAbleLinkedList } from "./Base/SimpleSort";
import { SoalLinkedList } from "./Praktikum/SoalLinkedList";

function performanceTest(sortingFunction: () => void) {
    let startTime = performance.now()
    sortingFunction();
    console.log(`Waktu yang dibutuhkan: ${performance.now() - startTime} ms`);
}

try {
    let linkedList = new SimpleSortAbleLinkedList();
    console.log("----Init LinkedList----");
    linkedList.add(-20);
    linkedList.add(5);
    linkedList.add(5);
    linkedList.add(2);
    linkedList.add(7);
    linkedList.add(-5);
    linkedList.add(43);
    linkedList.add(-9);
    linkedList.add(-1);
    // linkedList.add(11);
    // linkedList.add(0);
    // linkedList.add(8);
    // linkedList.ShowAll();
    // linkedList.generateRandomList(8);
    linkedList.printAsArray();
    linkedList.selectionSort();
    linkedList.printAsArray();


} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

