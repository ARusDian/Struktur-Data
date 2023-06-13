import { hashmap } from "./Hashmap/RBT";
interface BaseTransactionModel {
    id?: number;
    name: string;
    email: string;
    phone_number: string;
    total_tickets: number;
    tickets_category: string;
    total_amount: number;
    payment_method: string;
    payment_status: string;
    payment_link: string;
    ticket_id?: string;
    ticket_status?: string;
    ticket_barcode?: string | null;
    redeem_amount: number | null;
    created_at: string;
    updated_at: string;
}
export class IndexColumnRBT extends hashmap<String, BaseTransactionModel> {

    // @ts-ignore
    printTransactionTree(prefix: String = "", Node: Node<k, BaseTransactionModel> | null = this._root, isLeft: boolean = true) {
        if (Node !== null) {
            this.printTransactionTree(
                prefix === "" ?
                    prefix + (isLeft ? "    " : "    ") :
                    prefix + (isLeft ? "│   " : "    "),
                Node!.getRight(), false);
            console.log((
                prefix === "" ?
                    prefix + "─── " : prefix + (isLeft ? "└── " : "┌── ")) +
                Node!.getKey() + (Node!.isRed() ? " (red)" : " (black)")
            );
            this.printTransactionTree(prefix + (isLeft ? "    " : "│   "), Node!.getLeft(), true);
        }
    }
}
