import { RedBlackTree } from "./RedBlackTree/RedBlackTree";

try {
    let RBT = new RedBlackTree<number, string>();
    RBT.add(9, "nine");
    RBT.add(3, "three");
    RBT.add(4, "four");
    RBT.add(6, "six");
    RBT.add(8, "eight");
    RBT.add(5, "five");
    RBT.add(1, "one");
    RBT.add(2, "two");
    RBT.add(7, "seven");
    RBT.add(10, "ten");
    RBT.add(11, "eleven");
    RBT.add(13, "ten");
    RBT.add(12, "ten");
    RBT.printTree();
    console.log(RBT.getRoot()?.getKey());
    // RBT.remove(9);
    // RBT.printTree();
    // console.log(RBT.getRoot()?.getKey());

} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

