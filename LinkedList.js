const node = (val, next) => ({ val, next });

class LinkedList {
    constructor() {
        this.head = null;
    }

    push(val) {
        const n = node(val, null);
        this.head = n;
    }
}