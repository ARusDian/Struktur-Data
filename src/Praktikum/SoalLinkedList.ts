import { BaseLinkedList } from "./../Base/BaseLinkedList";
import {Node} from "../Base/Node";

export class SoalLinkedList extends BaseLinkedList {
    public MoveTailToHead() {
        let pointerNode1 = this._first;
        let pointerNode2 = this._last;

        if (pointerNode1 === this._first) {
            this._first = pointerNode2;
        } else if (pointerNode2 === this._first) {
            this._first = pointerNode1;
        }
        if (pointerNode1 === this._last) {
            this._last = pointerNode2;
        } else if (pointerNode2 === this._last) {
            this._last = pointerNode1;
        }

        let tempNode = pointerNode1?.getNext();
        pointerNode1?.setNext(pointerNode2?.getNext());
        pointerNode2?.setNext(tempNode);

        if (pointerNode1?.getNext()) {
            pointerNode1.getNext()?.setPrev(pointerNode1);
        }
        if (pointerNode2?.getNext()) {
            pointerNode2.getNext()?.setPrev(pointerNode2);
        }

        tempNode = pointerNode1?.getPrev();
        pointerNode1?.setPrev(pointerNode2?.getPrev());
        pointerNode2?.setPrev(tempNode);

        if (pointerNode1?.getPrev()) {
            pointerNode1.getPrev()?.setNext(pointerNode1);
        }
        if (pointerNode2?.getNext()) {
            pointerNode2.getPrev()?.setNext(pointerNode2);
        }
    }

    public removeDuplicates() {
        for (let i = 0; i < this._lenght; i++) {
            let currentValue = this.find(i)?.getValue();
            for (let j = i + 1; j < this._lenght; j++) {
                let currentNodeValue = this.find(j)?.getValue();
                if (currentValue === currentNodeValue) {
                    this.remove(j);
                    console.log(`Found duplicate : ${currentNodeValue} \nRemoving ${currentNodeValue}`);
                }
            }
        }
    }

    public removeByValue(value: any) {
        console.log(`Removing ${value}`);
        let currentNode: Node | undefined;
        let valueFound = false;
        for (let i = 0; i < this._lenght; i++) {
            currentNode = this.find(i);
            if (currentNode) {
                if (value === currentNode.getValue()) {
                    this.remove(i);
                    valueFound = true;
                    console.log(`${value} is found, removing node...`);
                }
            }
        }
        if (!valueFound) {
            console.log(`${value} is not found`);
        }
    }
}
