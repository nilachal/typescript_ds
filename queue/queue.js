/*
works based on LIFO or FILO
*/
class Queue{
	constructor(){
		this.items = [];
	}
	
	isEmpty(){
		if (this.items.length == 0){
			return true;
		}else{
			return false;
		}
	}
	
	enqueue(x){
		this.items.push(x);
	}
	
	dequeue(){
		if(this.items.length == 0){
			console.log('Data out of bound');
			return
		} else {
			let dequeuedElement = this.items.shift();
			console.log("dequeued element is : ", dequeuedElement);
		}
	}	
	
	printQueue(){
		for(let i=0; i<this.items.length; i++){
			console.log(this.items[i]);
		}
	}
}

var queObj = new Queue();
queObj.enqueue(5);
queObj.enqueue(9);
queObj.dequeue();
queObj.enqueue(10);
queObj.enqueue(30);
queObj.printQueue();
