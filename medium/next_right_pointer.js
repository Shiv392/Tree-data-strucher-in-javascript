// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
// Initially, all next pointers are set to NULL.
// Example 1:
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.a
var connect = function(root) {
    //dfs
 //    if(!root || root.left==null) return root;
 //    root.left.next=root.right;
 //    root.right.next=root.next? root.next.left : null;
 //    connect(root.left);
 //    connect(root.right);
 //    return root;
      //bfs
      if(!root) return root;
      let queue=[root];
      while(queue.length){
          let next=[];
          while(queue.length){
              let node= queue.shift();
              node.next=queue[0]||null;
              if(node.left){
                  next.push(node.left);
                  next.push(node.right);
              }
          }
          queue=next;
      }
      return root;
 };