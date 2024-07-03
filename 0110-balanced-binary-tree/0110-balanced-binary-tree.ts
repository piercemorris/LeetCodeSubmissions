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

function isBalanced(root: TreeNode | null): boolean {
    let isBalanced = true

    if (root === null) return true

    function walk(node: TreeNode, depth: number): number {
        if (node === null) return depth-1

        const lDepth = walk(node.left, depth+1)
        const rDepth = walk(node.right, depth+1)

        if (Math.abs(lDepth - rDepth) > 1) isBalanced = false

        return Math.max(lDepth, rDepth)
    }

    walk(root, 0)

    return isBalanced
};