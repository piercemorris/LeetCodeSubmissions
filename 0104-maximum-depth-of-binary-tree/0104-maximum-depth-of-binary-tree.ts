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

function walk(curr: TreeNode | null, depth: number): number {
    if (!curr) return depth
    return Math.max(walk(curr.left, depth+1), walk(curr.right, depth+1))
}

function maxDepth(root: TreeNode | null): number {
    return walk(root, 0)
};