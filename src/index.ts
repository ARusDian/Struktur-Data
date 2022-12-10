// import { RedBlackTree } from "./RedBlackTree/RedBlackTree";
// import { BinaryTree } from "./Tree/BinaryTree";
import { hashmap } from "./Hashmap/RBT";

try {
    let Hashmap = new hashmap<String, String>();
    Hashmap.insert("Angela", "Angela");
    Hashmap.insert("Rusdi", "Rusdi");
    Hashmap.insert("amel", "amel");
    Hashmap.insert("Erlangga", "Erlangga");
    Hashmap.insert("Aisyah", "Aisyah");
    Hashmap.insert("Dylan", "Dylan");
    Hashmap.insert("Chandra", "Chandra");
    Hashmap.insert("angela", "angela");
    Hashmap.printTree();


} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

