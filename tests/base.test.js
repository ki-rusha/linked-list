const LinkedList = require('../LinkedList');

const ll = new LinkedList();
ll.addFirst(1);
console.log(ll);
ll.addFirst(2);
console.log(ll);

ll.deleteFirst()
ll.addFirst(3);
ll.addFirst(4);
console.log(ll);
let first = ll.deleteFirst();
console.log(ll, first);
first = ll.deleteFirst();
console.log(ll, first);
console.log(ll, ll.deleteFirst())
