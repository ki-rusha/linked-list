const assert = require('assert');
const LinkedList = require('../LinkedList');

describe('LinkedList', () => {
    describe('#addFirst()', () => {
        const l1 = new LinkedList();

        it('should add the first node with value 1', () => {
            l1.addFirst(1);
            assert.equal(l1.head.val, 1);
            assert.equal(l1.head.next, null);
        });

        it('should add the second node with value 2 to the head', () => {
            const node1 = l1.head;
            l1.addFirst(2);
            assert.equal(l1.head.val, 2);
            assert.equal(l1.head.next, node1);
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
})
