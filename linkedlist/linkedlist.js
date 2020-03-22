class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
		this.last_node = null;
	}
	
	addNode(x){
		if(this.last_node == null){
			this.head = new Node(x);
			this.last_node = this.head;
		}else{
			this.last_node.next = new Node(x);
			this.last_node = this.last_node.next;
		}
	}
	
	insertAtBeginning(x){
		let new_node = new Node(x);
		new_node.next = this.head;
		this.head = new_node;
	}
	
	insertAtSpecificPosition(prev_node, x){
		if(prev_node == null){
			console.log("The previous node must be in the linked list");
			return
		}else{
			let new_node = new Node(x);
			new_node.next = prev_node.next;
			prev_node.next = new_node;
		}
	}
	
	insertAtEnd(x){
		let new_node = new Node(x);
		
		if( this.head == null){
			this.head = new_node;
			return
		}else{
			let current = this.head;
			while(current.next != null){
				current = current.next;
			}			
			current.next = new_node;
		}
	}
	
	display(){
		let current = this.head;
		while( current != null){
			console.log(current.data);
			current = current.next;
		}		
	}
}

let li = new LinkedList();
li.addNode(3);
li.addNode(5);
li.addNode(31);
li.addNode(22);
li.addNode(09);
li.addNode(66);
li.insertAtBeginning(9);
li.insertAtSpecificPosition(li.head.next,88);
li.insertAtEnd(77);
console.log(li.head);
li.display();
