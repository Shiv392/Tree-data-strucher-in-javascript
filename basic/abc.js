class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class Bst{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root==null;
    }
    insert(data){
       let newNode= new Node(data);
       if(this.isEmpty()){
        this.root=newNode;
       }
       else {
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
            else{
                this.insertNode(root.right,newNode);
            }
        }
    }
    // searching(root,value){
    //     if(this.isEmpty()){
    //         return false;
    //     }
    //     else{
    //         if(root.data==value){
    //             return true;
    //         }
    //         else if(value < root.data){
    //             return this.searching(root.left,value);
    //         }
    //         else{
    //             return this.searching(root.right,value);
    //         }
    //     }
    // }
    inorder(root){
      if(root){
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
      }
    }
    preorder(root){
        if(root){
            console.log(root.data);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left);
            this.postorder(root.right);
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
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
}

let bst=new Bst();
console.log('is tree empty>>>',bst.isEmpty());
bst.insert(10);
bst.insert(12);
bst.insert(9);
bst.insert(5);
bst.insert(15);
bst.insert(6);
bst.insert(50);
console.log('is tree empty>>>',bst.isEmpty());
// console.log('is 20 present in tree',bst.searching(bst.root,20));
console.log('inorder');
bst.inorder(bst.root)
console.log('preorder>>>');
bst.preorder(bst.root);
console.log('postorder>>>>');
bst.postorder(bst.root);
console.log('BFS>>>>');
bst.BFS();