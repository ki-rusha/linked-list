const assert = require('assert');
const LinkedList = require('../LinkedList');

describe('LinkedList', () => {
    describe('#addFirst()', () => {
        it('should add the first node with value 1', () => {
            const l = new LinkedList();
            l.addFirst(1);
            assert.equal(l.head.val, 1);
            assert.equal(l.head.next, null);
        });

        it('should add the second node with value 2 to the head', () => {
            const l = new LinkedList();
            l.addFirst(1);
            const first = l.head;
            l.addFirst(2);
            assert.equal(l.head.val, 2);
            assert.equal(l.head.next, first);
        });
    })

    describe('#deleteFirst', () => {
        it('should delete nothing in empty list', () => {
            const l = new LinkedList();
            assert.equal(l.head, null);
        });

        it('should delete the single node', () => {
            const l = new LinkedList();
            l.addFirst(1);
            assert.notEqual(l.head, null);
            l.deleteFirst();
            assert.equal(l.head, null);
        });

        it('should return value of the deleted node', () => {
            const l = new LinkedList();
            l.addFirst(42);
            const val = l.deleteFirst();
            assert.equal(val, 42);
        })

        it('should delete exactly the first node', () => {
            const l = new LinkedList();
            l.addFirst(1);
            l.addFirst(2);
            assert.equal(l.deleteFirst(), 2);
            assert.equal(l.deleteFirst(), 1);
        })
    })

    describe('#getLength', () => {
        it('should return 0 for an empty list', () => {
            const l = new LinkedList();
            assert.equal(l.getLength(), 0);
        });

        it('should return 1 for one item list', () => {
            const l = new LinkedList();
            l.addFirst(1);
            assert.equal(l.getLength(), 1);
        })

        it('should return 13 and them 0', () => {
            const l = new LinkedList();

            let i = 0;
            while(i++ < 13) {
                l.addFirst(1);
            }
            assert.equal(l.getLength(), 13);

            let j = 0;
            while(j++ < 15) {
                l.deleteFirst();
            }
            assert.equal(l.getLength(), 0);
        })
    })

    describe('#addLast()', () => {
        it('should add a node with value 13', () => {
            const l = new LinkedList();
            l.addLast(13);
            assert.equal(l.getLength(), 1);
            assert.equal(l.deleteFirst(), 13);
        });

        it('should add the second value 42 to the tail', () => {
            const l = new LinkedList();
            l.addLast(13);
            l.addLast(42);
            assert.equal(l.deleteFirst(), 13);
            assert.equal(l.deleteFirst(), 42);
        })
    })

    describe('#getFirst()', () => {
        it('should return undefined for empty list', () => {
            const l = new LinkedList();
            assert.equal(l.getFirst(), undefined);
        });

        it('should return 9', () => {
            const l = new LinkedList();
            l.addFirst(13);
            l.addFirst(9);
            assert.equal(l.getFirst(), 9);
        });

        it('should not mutate the list', () => {
            const l = new LinkedList();
            l.addFirst(13);
            l.addFirst(9);
            assert.equal(l.getFirst(), 9);
            assert.equal(l.getLength(), 2);
            assert.equal(l.getFirst(), 9);
        });
    })

    describe('#getLast()', () => {
        it('should return undefined for empty list', () => {
            const l = new LinkedList();
            assert.equal(l.getLast(), undefined);
        });

        it('should return 13', () => {
            const l = new LinkedList();
            l.addFirst(13);
            l.addFirst(9);
            assert.equal(l.getLast(), 13);
        });

        it('should not mutate the list', () => {
            const l = new LinkedList();
            l.addFirst(13);
            l.addFirst(9);
            assert.equal(l.getLast(), 13);
            assert.equal(l.getLast(), 13);
            assert.equal(l.getLength(), 2);
        });
    })

    describe('#toString', () => {
        it('should join list values to string', () => {
            const l = new LinkedList();
            const values = [1, 2, 3, 4];
            values.forEach(v => l.addLast(v));

            assert.equal(
                l.toString(),
                values.join(LinkedList.logSeparator),
            );
        })
    })

    describe('#searchByIndex', () => {
        it('should return 2', () => {
            const l = new LinkedList();
            l.addFirst(4);
            l.addFirst(3);
            l.addFirst(2);
            l.addFirst(1);
            assert.equal(l.searchByIndex(2), 2);
        })

        it('should return undefined if list is empty', () => {
            const l = new LinkedList();
            assert.equal(l.searchByIndex(2), undefined);
        })

        it('should return undefined when the index is out of list range', () => {
            const l = new LinkedList();
            l.addFirst(4);
            l.addFirst(3);
            l.addFirst(2);
            l.addFirst(1);
            assert.equal(l.searchByIndex(-7), undefined);
            assert.equal(l.searchByIndex(0), undefined);
            assert.equal(l.searchByIndex(5), undefined);
            assert.equal(l.searchByIndex(10), undefined);
        })
    })
})
