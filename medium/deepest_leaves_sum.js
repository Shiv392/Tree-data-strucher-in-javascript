// Given the root of a binary tree, return the sum of values of its deepest leaves.
// Example 1:
// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:
// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
var deepestLeavesSum = function(root) {
    if(!root) return 0;
     let queue=[root];
     while(queue.length){
         let n=queue.length,res=0;
         for(let i=0;i<n;i++){
             let node=queue.shift();
              //get all sums untill its final row
             res+=node.val;
             if(node.left ) queue.push(node.left);
             if(node.right) queue.push(node.right);
         }
         //if we get final row return its sum
         if(!queue.length) return res;
     }
};