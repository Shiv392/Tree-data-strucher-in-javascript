// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.
// Example 1:
// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:
// Input: root = [1,0,48,null,null,12,49]
// Output: 1
var minDiffInBST = function(root) {
    let res=Infinity,prev;
    const dfs=(root)=>{
        if(!root) return;
        dfs(root.left);
        if(prev!=null) res=Math.min(res, root.val - prev.val);
        prev=root;
        dfs(root.right)
    }
    dfs(root);
    return res;
};