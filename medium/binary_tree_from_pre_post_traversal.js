// Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree of distinct values and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree.
// If there exist multiple answers, you can return any of them.
// Example 1:
// Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
// Output: [1,2,3,4,5,6,7]
var constructFromPrePost = function(preorder, postorder) {
    let i=0;
    const dfs=(arr)=>{
        if(!arr.length) return null;
        let node=preorder[i++];
        let idx=arr.indexOf(preorder[i]);
        let root=new TreeNode(node);
        root.left=dfs(arr.slice(0,idx+1));
        root.right=dfs(arr.slice(idx+1,arr.indexOf(node)));
        return root;
    }
return dfs(postorder);    
};