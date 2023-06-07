// Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.
// The length of the path between two nodes is represented by the number of edges between them.
// Example 1:
// Input: root = [5,4,5,1,1,null,5]
// Output: 2
// Explanation: The shown image shows that the longest path of the same value (i.e. 5).
var longestUnivaluePath = function(root) {
    if(!root) return 0;
    let res=0;
    const dfs=(parent,curr)=>{
      if(!curr) return 0;
      let left=dfs(curr.val,curr.left);
      let right=dfs(curr.val,curr.right);
      res=Math.max(res,left+right);
      return parent==curr.val ? Math.max(left,right)+1:0;
    }
    dfs(root.val,root);
    return res;
};