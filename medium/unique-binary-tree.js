// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
// Example 1:
// Input: n = 3
// Output: 5
var numTrees = function(n) {
    let res= new Array(n+1).fill(0);
    res[0]=1,res[1]=1;
    for(let i=2;i<=n;i++){
        for(let j=1;j<=i;j++){
            res[i]+=res[j-1]*res[i-j];
        }
    }
    return res[n]
};