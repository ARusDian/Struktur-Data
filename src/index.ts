import { RedBlackTree } from "./RedBlackTree/RedBlackTree";
import { BinaryTree } from "./Tree/BinaryTree";

try {
    let RBT = new RedBlackTree<number, string>();
    RBT.insert(1, "1");
    RBT.insert(2, "2 ");
    RBT.insert(3, "3");
    RBT.insert(4, "4");
    RBT.insert(5, "5");
    RBT.insert(6, "6");
    RBT.insert(7, "7");
    RBT.insert(8, "8");
    RBT.printTree();


} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

