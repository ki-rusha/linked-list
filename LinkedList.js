const node = (val, next) => ({ val, next });

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(v) {
        this.head = node(v, this.head);
    }

    addLast(v) {
        if (this.head === null) {
            return this.addFirst(v);
        }

        let last = this.head;
        while(last.next !== null) {
            last = last.next;
        }
        last.next = node(v, null);
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
