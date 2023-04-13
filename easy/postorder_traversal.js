// Given the root of a binary tree, return the postorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:
// Input: root = []
// Output: []
// Example 3:
// Input: root = [1]
// Output: [1]
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
var postorderTraversal = function(root) {
    return dfs(root,[]);
};
function dfs(root,res){
    if(root==null) return []
    dfs(root.left,res);
    dfs(root.right,res);
    res.push(root.val);
    return res;
}