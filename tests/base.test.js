const LinkedList = require('../LinkedList');

const ll = new LinkedList();
ll.addFirst(1);
console.log(ll);
ll.addFirst(2);
console.log(ll);

ll.deleteFirst()
ll.addFirst(3);
console.log(ll);
ll.deleteFirst();
console.log(ll);
ll.deleteFirst();
ll.deleteFirst();
console.log(ll);

const l1 = new LinkedList();
let i = 10;
while (++i < 100) {
    l1.addFirst(i);
}

console.log(l1);

let j = 0;
while (++j < 100) {
    l1.deleteFirst();
}

console.log(l1);
