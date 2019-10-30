const node = (val, next) => ({ val, next });

class LinkedList {
    static logSeparator = ' -> ';

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

    getFirst() {
        return this.head === null
            ? undefined
            : this.head.val;
    }

    getLast() {
        if (this.head === null) return undefined;

        let last = this.head;
        while(last.next !== null) {
            last = last.next;
        }
        return last.val;
    }

    toString() {
        let tmp = this.head;
        let str = '';
        const { logSeparator } = this.constructor;

        while(tmp !== null) {
            str += `${tmp.val}${logSeparator}`;
            tmp = tmp.next;
        }

        return str.slice(0, -logSeparator.length);
    }

    searchByIndex(i) {
        if (i <= 0) return undefined;

        let tmp = this.head;
        let j = 1;
        while(j < i && tmp !== null) {
            tmp = tmp.next;
            j++;
        }
        return tmp === null
            ? undefined
            : tmp.val;
    }
}

module.exports = LinkedList;
