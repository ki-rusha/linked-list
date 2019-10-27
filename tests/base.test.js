const LinkedList = require('../LinkedList');

const l1 = new LinkedList();
l1.addFirst(1);
console.log(l1);
l1.addFirst(2);
console.log(l1);

l1.deleteFirst()
l1.addFirst(3);
l1.addFirst(4);
console.log(l1);
l1.deleteFirst();
console.log(l1);

let first = l1.deleteFirst();
console.log(l1, first);
first = l1.deleteFirst();
console.log(l1, first);
console.log(l1, l1.deleteFirst())


const l2 = new LinkedList();
let i = 10;
while (++i < 100) {
    l2.addFirst(i);
}

console.log(l2);

let j = 0;
while (++j < 100) {
    l2.deleteFirst();
}

console.log(l2);

const l3 = new LinkedList();

console.log(l3.getLength());
l3.addFirst(3);
console.log(l3.getLength(l3.head));
l3.addFirst(4);
console.log(l3.getLength(l3.head));
l3.addFirst(9);
console.log(l3.getLength(l3.head));
l3.deleteFirst();
console.log(l3.getLength(l3.head));
