class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }
    insert(data){  //adding new node
        let newNode=new Node(data); //make new node from data
        if(this.isEmpty()){  //if tree is already empty then add newnode to root
            this.root=newNode;
        }
        else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(root,newNode){
        if(root.data > newNode.data){
            if(root.left==null){
                root.left=newNode;
            }
            else {
                this.insertNode(root.left,newNode);
            }
        }
        else{
            if(root.right==null){
                root.right=newNode;
            }
            else {
                this.insertNode(root.right,newNode);
            }
        }
    }
    //searching for a value
    // search(root,value){
    //    if(this.isEmpty()){
    //     return false
    //    }
    //    else{
    //     if(root.data == value){
    //         return true;
    //     }
    //     else if(root.data> value){
    //         return this.search(root.left,value);
    //     }
    //     else return this.search(root.right,value);
    //    }
    // }
    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.data);
           this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }
    BFS(){
        let queue=[];
        queue.push(this.root);
        while(queue.length){
            let curr=queue.shift();
            console.log(curr.data);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
}
let bst= new BST();
console.log('is binary tree empty?',bst.isEmpty());
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(3);
bst.insert(7);

console.log('is binary tree empty?',bst.isEmpty());
// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,25));
// console.log(bst.search(bst.root,5));
console.log(`pre order`);
bst.preOrder(bst.root);
console.log('inorder ');
bst.inOrder(bst.root);
console.log(`post order`);
bst.postOrder(bst.root);
console.log(`bfs`);
bst.BFS();