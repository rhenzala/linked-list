import LinkedList from "./list.js";


const list = new LinkedList();
list.append('air')
list.append('earth')
list.append('last')
list.append('new last')
list.prepend('water')
console.log('size', list.size())
console.log('last item', list.at(list.size()-1))
console.log('first node', list.first())
console.log('last node', list.tail())
console.log('remove last', list.pop())
console.log('last node again', list.tail())
console.log('contains earth:', list.contains('earth'))
console.log('contains mars:', list.contains('mars'))
console.log('index of air:', list.find('air'))
console.log('index of quake:', list.find('quake'))
console.log(list.toString())