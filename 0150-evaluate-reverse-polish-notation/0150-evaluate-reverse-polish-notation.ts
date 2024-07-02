function evalRPN(tokens: string[]): number {
    let output = 0
    const stack: number[] = []

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]

        if (stack.length > 1 && token.length === 1 && token.match(/[\+\*\/\-]/)) {
            const val = stack.pop()
            const val2 = stack.pop()

            if      (token === '+') stack.push(val2 + val)
            else if (token === '-') stack.push(val2 - val)
            else if (token === '*') stack.push(val2 * val)
            else if (token === '/') {
                let divison = val2 / val
                if (divison < 0)    divison = Math.ceil(divison)
                else                divison = Math.floor(divison)
                stack.push(divison)
            }
        }

        if (!isNaN(parseInt(token))) stack.push(parseInt(token))
    }

    return stack[0]
};