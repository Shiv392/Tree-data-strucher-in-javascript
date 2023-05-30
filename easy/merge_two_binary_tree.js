// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]
var mergeTrees = function(root1, root2) {
    if(!root1 || !root2) return root1||root2
    let res= new TreeNode(root1.val+root2.val);
    res.left=mergeTrees(root1.left,root2.left);
    res.right=mergeTrees(root1.right,root2.right);
    return res;
};