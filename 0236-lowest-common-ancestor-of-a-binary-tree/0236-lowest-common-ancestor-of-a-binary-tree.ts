/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let lca = root
    
    function walk(node: TreeNode | null): boolean {
        if (!node) return false

        let tempLca = (node.val === p.val || node.val === q.val)

        let foundLeft = walk(node.left)
        let foundRight = walk(node.right)

        if (tempLca && (foundLeft || foundRight)) lca = node

        if (foundRight && foundLeft) lca = node

        return tempLca || foundLeft || foundRight
    }

    walk(root)

    return lca
};