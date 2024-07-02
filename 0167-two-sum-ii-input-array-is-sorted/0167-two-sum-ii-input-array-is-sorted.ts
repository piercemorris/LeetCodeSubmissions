function twoSum(numbers: number[], target: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]

        if (map.has(num)) {
            return [map.get(num) + 1, i + 1]
        }

        map.set(target - num, i)
    }
};