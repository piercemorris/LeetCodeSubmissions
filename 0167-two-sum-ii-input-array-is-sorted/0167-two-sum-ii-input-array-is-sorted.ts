function twoSum(numbers: number[], target: number): number[] {
    let head = 0
    let tail = numbers.length - 1

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[head] + numbers[tail] > target) tail--

        if (numbers[head] + numbers[tail] < target) head++

        if (numbers[head] + numbers[tail] === target) return [head + 1, tail + 1]
    }
};