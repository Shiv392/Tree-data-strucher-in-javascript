// Given the root of a binary tree, return the leftmost value in the last row of the tree.
// Example 1:
// Input: root = [2,1,3]
// Output: 1
// Example 2:
// Input: root = [1,2,3,4,null,5,6,null,null,7]
// Output: 7
var findBottomLeftValue = function(root) {
    if(!root) return 0;
    let maxheight=0,maxnode=0;
    const dfs=(root,height)=>{
    if(!root) return;
    if(height> maxheight){
        maxheight=height;
        maxnode=root.val;
    }
    dfs(root.left,height+1);
    dfs(root.right,height+1);
    }
    dfs(root,1);
    return maxnode;
};