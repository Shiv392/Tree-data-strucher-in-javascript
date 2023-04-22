// Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.
// Example 1:
// Input: root1 = [2,1,4], root2 = [1,0,3]
// Output: [0,1,1,2,3,4]
// Example 2:
// Input: root1 = [1,null,8], root2 = [8,1]
// Output: [1,1,8,8]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let res=[];
    if(!root1 && !root2) return [];
    const dfs=(root)=>{
     if(!root) return ;
     res.push(root.val);
     dfs(root.left);
     dfs(root.right);
   }
   dfs(root1);
   dfs(root2);
   return res.sort((a,b)=>a-b)
};