// import { RedBlackTree } from "./RedBlackTree/RedBlackTree";
// import { BinaryTree } from "./Tree/BinaryTree";
// import { hashmap } from "./Hashmap/RBT";
import { data } from "./Data";
    
import { IndexColumnRBT } from "./IndexColumnRBT";

try {
    const Hashmap = new IndexColumnRBT();
    data.forEach((item) => {
        Hashmap.insert(item.ticket_id, item);
    });
    
    Hashmap.printTransactionTree();

    const node = Hashmap.search("15237967621041");
    console.log(node?.getValue());

    const ticketId = "15237967621041";
    
    // let res;
    // // linear search
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].ticket_id === ticketId) {
    //         res = data[i];
    //         break;
    //     }
    // }

    // console.log(res);


} catch (e) {
    console.log(`Error Occured, \n${e}`);
}

