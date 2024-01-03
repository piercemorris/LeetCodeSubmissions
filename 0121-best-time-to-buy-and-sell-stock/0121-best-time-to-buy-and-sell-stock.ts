function maxProfit(prices: number[]): number {
    let maxProfit = 0
    let currPrice = prices[0]

    if (prices.length < 2) return 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < currPrice) currPrice = prices[i]

        if (prices[i] - currPrice > maxProfit) maxProfit = prices[i] - currPrice
    }

    return maxProfit
};