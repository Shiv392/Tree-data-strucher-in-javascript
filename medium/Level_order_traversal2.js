// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:
// Input: root = [1]
// Output: [[1]]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let res=[],stack=[root];
    while(stack.length){
        let currlength= stack.length;
        let currlevel=[];
        for(let i=0;i<currlength;i++){
            let node= stack.shift();
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
            currlevel.push(node.val);
        }
        res.push(currlevel);
    }
    return res;
};