function isValid(s: string): boolean {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i])
        try {
            if (s[i] === ')') if (stack.pop() !== '(') return false
            if (s[i] === '}') if (stack.pop() !== '{') return false
            if (s[i] === ']') if (stack.pop() !== '[') return false
        } catch (ex) {
            return false
        }
    }

    return stack.length === 0
};