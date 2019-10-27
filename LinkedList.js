const node = (val, next) => ({ val, next });

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(v) {
        this.head = node(v, this.head);
    }

    deleteFirst() {
        if (this.head === null) return;
        const { val } = this.head; // const val = this.head.val
        this.head = this.head.next;
        return val;
    }


    getLength() {
        let tmp = this.head;
        let length = 0;

        while(tmp !== null) {
            tmp = tmp.next;
            length++;
        }

        return length;
    }
}


module.exports = LinkedList;
