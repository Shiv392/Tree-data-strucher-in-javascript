// You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
// Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.
// Example 1:
// Input: root = [10,4,6]
// Output: true
// Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
// 10 is equal to 4 + 6, so we return true.
var checkTree = function(root) {
    let arr=[];
    const dfs=(root)=>{
        if(!root) return;
        if(root){
            arr.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }
    }  
    dfs(root)
    return arr[0]==arr[1]+arr[2]?true:false;
    
    //one liner
    return root.val==root.right.val+root.left.val;

  };