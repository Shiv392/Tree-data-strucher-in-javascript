// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:
// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:
// Input: root = []
// Output: []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    let res=[];
    bfs(root,0,res);
    return res;
   };
   function bfs(root,i,res){
   if(!root) return ;
   if(i==res.length) res.push(root.val);
   bfs(root.right,i+1,res);
   bfs(root.left,i+1,res);
   }