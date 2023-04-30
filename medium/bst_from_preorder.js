// Input: preorder = [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]a
var bstFromPreorder = function(preorder) {
    if(!preorder.length) return null;
    const dfs=(start,end)=>{
        if(start>=end) return null;
        const v=preorder[start];
        const node= new TreeNode(v);
        let i=start;
        while(i<end){
            if(preorder[i]>v) break;
            i++;
        }
        node.left= dfs(start+1,i);
        node.right=dfs(i,end);
        return node;
    }
     return dfs(0,preorder.length);
};