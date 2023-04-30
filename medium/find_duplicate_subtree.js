// Given the root of a binary tree, return all duplicate subtrees.
// For each kind of duplicate subtrees, you only need to return the root node of any one of them.
// Two trees are duplicate if they have the same structure with the same node values.
// Example 1:
// Input: root = [1,2,3,4,null,2,4,null,null,4]
// Output: [[2,4],[4]]
// Example 2:
// Input: root = [2,1,1]
// Output: [[1]]
var findDuplicateSubtrees = function(root) {
  const map = new Map(), res = []
  dfs(root, map, res)
  return res
};
function dfs(root, map, res){
  if(!root) return '#'
  const subtree = `${root.val}.${dfs(root.left,map,res)}.${dfs(root.right, map,res)}`
  map.set(subtree,(map.get(subtree)||0) + 1)
  if(map.get(subtree) === 2){
    res.push(root)
  }
  return subtree
}