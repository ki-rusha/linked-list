const node = (val, next) => ({ val, next });

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(v) {
        this.head = node(v, this.head);
    }

    deleteFirst() {
        const { val } = this.head; // const val = this.head.val
        this.head = this.head.next;
        return val;
    }
}

module.exports = LinkedList;
