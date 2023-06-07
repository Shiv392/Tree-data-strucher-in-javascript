// Given the root of a complete binary tree, return the number of the nodes in the tree.
// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
// Design an algorithm that runs in less than O(n) time complexity.
// Example 1:
// Input: root = [1,2,3,4,5,6]
// Output: 6
var countNodes = function(root) {
    if(!root) return 0;
    //cound left and right tree height
    const leftheight=getleftHeight(root);
    const rightheight=getrightHeight(root);
    //if height is same return numer of nodes 
    if(leftheight==rightheight){
        return Math.pow(2,leftheight) -1;
    }
    //it height are not saem
    return 1+countNodes(root.left)+ countNodes(root.right);
};
function getleftHeight(root){
  let leftheight=0;
  while(root){
      leftheight++;
      root=root.left;
  }
  return leftheight;
}
function getrightHeight(root){
    let rightheight=0;
    while(root){
        rightheight++;
        root=root.right;
    }
    return rightheight;
}