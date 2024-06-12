function isValid(s: string): boolean {
    const mappings: { [key: string]: string } = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    const stack: string[] = []

    for (let char of s) {
        if (mappings[char]) {
            const topElement = stack.length ? stack.pop() : "#"

            if (topElement !== mappings[char]) return false
        } else stack.push(char)
    }
    
    return stack.length === 0
};