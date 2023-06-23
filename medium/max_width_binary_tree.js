// Given the root of a binary tree, return the maximum width of the given tree.
// The maximum width of a tree is the maximum width among all levels.
// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
// It is guaranteed that the answer will in the range of a 32-bit signed integer.
// Example 1:
// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
var widthOfBinaryTree = function(root) {
  if(!root) return 0;
  let maxwidth=1,queue=[[root,0]];
  while(queue.length){
      let n=queue.length;
      let start_index=queue[0][1];
      let end_index=queue[queue.length-1][1];
      maxwidth=Math.max(maxwidth,end_index-start_index+1);
      for(let i=0;i<n;i++){
          let node_index_pair=queue.shift();
          let node=node_index_pair[0];
          let node_index=node_index_pair[1]-start_index;
          if(node.left) queue.push([node.left,2*node_index+1]);
          if(node.right) queue.push([node.right,2*node_index+2]);
      }
  }
  return maxwidth;
};