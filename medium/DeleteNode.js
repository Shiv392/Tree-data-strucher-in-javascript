// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
// Basically, the deletion can be divided into two stages:
// Search for a node to remove.
// If the node is found, delete the node.
// Example 1:
// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
// Example 2:
// Input: root = [5,3,6,2,4,null,7], key = 0
// Output: [5,3,6,2,4,null,7]
// Explanation: The tree does not contain a node with value = 0.
// Example 3:
// Input: root = [], key = 0
// Output: []
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    const findMin = (node) => {
       while(node.left){
           node = node.left
       }
       return node
   }
   
   const remove = (node, val) => {
       if(!node){
           return null
       }

       if(node.val === val){
           if(!node.left & !node.right){
               return null 
           }

           else if(!node.left){
               return node.right
           } 

           else if(!node.right){
               return node.left
           }

           else{
               const minNode = findMin(node.right)
               node.val = minNode.val
               node.right = remove(node.right, minNode.val)
           }

       } else if(val > node.val){
           node.right = remove(node.right, val)
       } else if(val < node.val){
           node.left = remove(node.left, val)
       } 

       return node
   }

   return remove(root, key)
};