class LinkedList {
    constructor() {
        this.headNode = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        this.length += 1;
        if (!this.headNode) {
            this.headNode = newNode;
            return
        }
        let current = this.headNode
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode
    }
    prepend(value) {
        const newNode = new Node(value);
        this.length += 1;
        if (!this.headNode) {
            this.headNode = newNode;
            return
        }
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }
    size() {
        return this.length;
    }
    first() {
        return this.headNode;
    }
    tail() {
        if (!this.headNode) return null
        let current = this.headNode
        while (current.nextNode) {
            current = current.nextNode
        }
        return current
    }
    at(index) {
        let current = this.headNode
        if (index >= this.length) return null
        for (let i = 0; i <= index; i++) {
            if (i === index) return current
            current = current.nextNode
        }
    }
    pop() {
        if (!this.headNode) return null
        this.length -= 1
        if (!this.headNode.nextNode) {
            const poppedNode = this.headNode
            this.headNode = null
            return poppedNode.value;
        }
        let current = this.headNode;
        while (current.nextNode.nextNode) {
            current = current.nextNode
        }
        const poppedValue = current.nextNode.value
        current.nextNode = null
        return poppedValue
    }
    contains(node) {
        let current = this.headNode
        for (let i = 0; i < this.length; i++) {
            if (current.value === node) return true
            current = current.nextNode
        }
        return false
    }
    find(node) {
        let current = this.headNode
        for (let i = 0; i < this.length; i++) {
            if (current.value === node) return i
            current = current.nextNode
        }
        return null
    }
    toString() {
        let output = ``;
        if (!this.headNode) return null
        let current = this.headNode
        for (let i = 0; i < this.length; i++) {
            output += `( ${current.value} ) -> `
            current = current.nextNode
        }
        return output += `null`
    }
}

class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

export default LinkedList



