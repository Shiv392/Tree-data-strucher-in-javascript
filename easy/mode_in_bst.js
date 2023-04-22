// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
// If the tree has more than one mode, return them in any order.
// Assume a BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
// Input: root = [1,null,2,2]
// Output: [2]
// Example 2:
// Input: root = [0]
// Output: [0]
var findMode = function(root) {
    let res=[],map=new Map(),max=0;
    const dfs=(root)=>{
        if(!root) return;
        map.set(root.val,map.get(root.val)+1||1);
        max=Math.max(max,map.get(root.val));
        if(root.left) dfs(root.left);
        if(root.right) dfs(root.right);
    }
    dfs(root);
    for(let [key,value] of map) {
        if(value==max) res.push(key);
    }
    return res;
   };