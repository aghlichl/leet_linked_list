// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;


        }

        this.length++

        return this;



    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.head){
            return undefined;
        }
        if(this.length === 1){
            let temp = this.tail;
            this.head = null;
            this.tail = null;
            this.length--
            return temp;
        }
        let currentNode = this.head
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next 
        }
        let temp = this.tail
        this.tail = currentNode
        currentNode.next = null;
        this.length--
        return temp;
        

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode;
        }
        else{
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let temp;
        if(!this.head){
            return undefined;
        }
        else if(this.length === 1){
            temp = this.head
            this.head = null;
            this.tail = null;
        }
        else{
            temp = this.head
            this.head = this.head.next
        }
        this.length--;
        return temp;

    }

    // TODO: Implement the contains method here
    contains(target) {
        if(this.length === 0){
            return false;
        }
        let currentNode = this.head

        while(currentNode !== this.tail){
            if(currentNode.value === target){
                return true;
            }
            currentNode = currentNode.next;
        }

        if (currentNode.value === target) {
            return true;
        }


        return false;

    }

    // TODO: Implement the get method here
    get(index) {
        if(index >= this.length){
            return null;
        }

        else{
            let currentNode = this.head;
            let counter=0;
            for(counter; counter < index; counter++){
                currentNode = currentNode.next
            }
            return currentNode;
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index >= this.length) {
            return false;
        }
        else {
            let counter = 0;
            let currentNode = this.head;
            for (counter; counter < index; counter++) {
                currentNode = currentNode.next
            }
            currentNode.value = val;
            return true;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        let currentNode = this.get(index-1);
        if(!currentNode.next){
            return false;
        }
        let temp = currentNode.next;
        let newNode = new Node(val);
        currentNode.next = newNode;
        newNode.next = temp;
        this.length++
        return true;

    }

    // TODO: Implement the remove method here
    remove(index) {
        let currentNode = this.get(index - 1);
        let temp;
        if (index >= this.length) {
            return undefined;
        }
        if(currentNode.next === this.tail){
            temp = currentNode.next;
            currentNode.next = null;
            this.tail = currentNode;
        }
        else{
            temp = currentNode.next;
            currentNode.next = currentNode.next.next;
        }
        this.length--
        return temp;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
