function generateParenthesis(n: number): string[] {

    let stack = []
    let res = []

    function backtrack(open: number, closed: number) {
        if (open === n && closed === n) {
            res.push(stack.join(""))
            return
        }

        if (open < n) {
            stack.push('(')
            backtrack(open + 1, closed)
            stack.pop()
        }

        if (closed < open) {
            stack.push(')')
            backtrack(open, closed + 1)
            stack.pop()
        }
    }

    backtrack(0, 0)

    return res
};