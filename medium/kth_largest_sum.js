// You are given the root of a binary tree and a positive integer k.
// The level sum in the tree is the sum of the values of the nodes that are on the same level.
// Return the kth largest level sum in the tree (not necessarily distinct). If there are fewer than k levels in the tree, return -1.
// Note that two nodes are on the same level if they have the same distance from the root.
// Example 1:
// Input: root = [5,8,9,2,1,3,7,4,6], k = 2
// Output: 13
// Explanation: The level sums are the following:
// - Level 1: 5.
// - Level 2: 8 + 9 = 17.
// - Level 3: 2 + 1 + 3 + 7 = 13.
// - Level 4: 4 + 6 = 10.
// The 2nd largest level sum is 13.
var kthLargestLevelSum = function(root, k) {
    if(!root) return 0;
    let arr=[],queue=[root];
    while(queue.length){
        let size=queue.length;
        let sum=0;
        for(let i=0;i<size;i++){
            let node=queue.shift();
            sum+=node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        arr.push(sum);
    }
    return arr.sort((a,b)=>b-a)[k-1] || -1
};