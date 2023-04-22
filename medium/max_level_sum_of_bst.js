// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
// Example 1:
// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.
// Example 2:
// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2
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
 * @return {number}
 */
var maxLevelSum = function(root) {
    let res=1,currsum=root.val;
    let queue=[root];
    let currlevel=1;
    while(queue.length){
        let currlen= queue.length;
        let levelsum=0;
        while(currlen--){
            let node= queue.shift();
            levelsum+=node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        if(levelsum > currsum){
            currsum=levelsum;
            res=currlevel;
        }
        currlevel++;
    }
  return res;
};