import { BinaryTree } from "./Tree/BinaryTree";

try {
    let BT = new BinaryTree<number>();
    BT.insert(5);
    BT.insert(3);
    BT.insert(7);
    BT.insert(1);
    BT.insert(4);
    BT.insert(6);
    BT.insert(8);
    BT.showAll();
    console.log(BT.isExist(3));
} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

