const node = (val, next) => ({ val, next });

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(v) {
        this.head = node(v, this.head);
    }

    deleteFirst() {
        this.head = this.head.next;
    }
}

module.exports = LinkedList;
