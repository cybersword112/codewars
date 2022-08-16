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
 var maxDepth = function(root) {
    //     checks if root is present
        if (root === null) return 0;
    //     since root is available. recursive call fx on each tree and find max value. 
        return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
    };
    
    // will be provided a binary tree of integer values
    // return an int value representing the max depth of the binary tree
    
    