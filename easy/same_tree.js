// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:
// Input: p = [1,2], q = [1,null,2]
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let res=true;
    const dfs=(tree1,tree2)=>{
        if(tree1?.val!=tree2?.val){
             return res=false;
        }
        if(tree1?.left && tree2?.left){
            dfs(tree1?.left,tree2?.left);
        }
        else if(!tree1?.left && tree2?.left){
            return res=false;
        }
        else if(tree1?.left && !tree2?.left){
            return res=false;
        }
        if(tree1?.right && tree2?.right){
            dfs(tree1?.right, tree2?.right);
        }
        else if(tree1?.right && !tree2?.right){
            return res=false;
        }
        else if(!tree1?.right && tree2?.right){
            return res=false
        }
    }
   dfs(p,q);
   return res;
};
