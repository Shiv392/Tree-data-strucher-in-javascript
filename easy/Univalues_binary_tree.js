// A binary tree is uni-valued if every node in the tree has the same value.
// Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.
// Example 1:
// Input: root = [1,1,1,1,1,null,1]
// Output: true
// Example 2:
// Input: root = [2,2,2,5,2]
// Output: false
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let temp=root.val;
    let stack=[root];
    while(stack.length){
     let curr=stack.pop();
     if(curr.val!=temp) return false;
     if(curr.left) stack.push(curr.left);
     if(curr.right) stack.push(curr.right);
    }
    return true;
};