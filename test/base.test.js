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
})
