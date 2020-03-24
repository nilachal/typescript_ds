class Node{
	constructor(data){
		this.left = null;
		this.right = null;
		this.val = data;
	}
}

function insert(root, node){
	if(root == null){
		root = node;
	} else {
		if(root.val < node.val){
			if(root.right == null){
				root.right = node;
			} else{
				insert(root.right, node);
			}
		} else {
			if(root.left == null){
				root.left = node;
			} else {
				insert(root.left, node);
			}
		}
	}
}

function inorderTraversal(root){
	if(root != null){
		inorderTraversal(root.left);
		console.log(root.val);
		inorderTraversal(root.right);
	}
}

function preOrderTraversal(root){
	if(root != null){		
		console.log(root.val);
		preOrderTraversal(root.left);		
		preOrderTraversal(root.right);
	}
}

function postOrderTraversal(root){
	if(root != null){		
		postOrderTraversal(root.left);		
		postOrderTraversal(root.right);
		console.log(root.val);
	}
}

function search(root, key){
	
	
	if(root == null){
		console.log(false);
		return false;
	}
	
	if(root.val == key){
		console.log("yes");
		return true;
	}
	
	res_left = search(root.left, key);
	if(res_left){
		console.log("yes");
		return true;
	}
	res_right = search(root.right, key);
	return res_right;
}

let rt = new Node(40);
insert(rt, new Node(50));
insert(rt, new Node(5));
insert(rt, new Node(10));
insert(rt, new Node(32));
insert(rt, new Node(58));
insert(rt, new Node(33));
insert(rt, new Node(45));
insert(rt, new Node(23));
inorderTraversal(rt);
console.log("=============");
preOrderTraversal(rt);
console.log("=============");
postOrderTraversal(rt);
console.log("=============");

search(rt,45);
