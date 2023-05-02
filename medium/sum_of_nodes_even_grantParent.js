// Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.
// A grandparent of a node is the parent of its parent if it exists.
// Example 1:
// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
// Example 2:
// Input: root = [1]
// Output: 0
var sumEvenGrandparent = function(root) {
    if(!root) return 0;
    let res=0;
    const dfs=(root)=>{
   if(!root) return ;
   if(root.val%2==0){
       if(root.left){
           if(root.left.left) res+=root.left.left.val;
           if(root.left.right) res+=root.left.right.val;
       }
       if(root.right){
           if(root.right.right) res+=root.right.right.val;
           if(root.right.left) res+=root.right.left.val;
       }
   }
   dfs(root.left);
   dfs(root.right);
    }
    dfs(root);
    return res;
};