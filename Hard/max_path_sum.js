// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
// The path sum of a path is the sum of the node's values in the path.
// Given the root of a binary tree, return the maximum path sum of any non-empty path.
// Example 1:
// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
var maxPathSum = function(root) {
    if(!root) return 0;
    let res=-Infinity;
    const dfs=(root)=>{
        if(!root ) return 0;
        //getting left node value
        const left=dfs(root.left);
        //getting right node value
        const right=dfs(root.right);
        //getting max between root, root&left , root&rigt;
        const maxval=Math.max(root.val , root.val+left, root.val+right);
        //gettting res between res , max and compolete substrees sum;
        res=Math.max(res,maxval, root.val+left+right);
        //reeturn maxvalue;
        return maxval;
    }
    dfs(root);
    return res;
};