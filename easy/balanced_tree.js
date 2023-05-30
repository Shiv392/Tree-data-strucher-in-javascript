// Given a binary tree, determine if it is 
// height-balanced
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true
var isBalanced = function(root) {
    if(!root) return true;
    const height=(root)=>{
        if(!root) return 0;
         const left1= height(root.left);
         const right1=height(root.right);
         return 1+Math.max(left1,right1);
    }
    const leftheight= height(root.left);
    const rightheight=height(root.right);
    let heightdiff=Math.abs(rightheight-leftheight);
    if(heightdiff>1){
        return false;
    }
    return isBalanced(root.left)  && isBalanced(root.right);
};