def maxProfit(prices, fee):
    if not prices:
        return 0

    cash = 0
    hold = -prices[0] - fee

    for price in prices[1:]:
        cash = max(cash, hold + price)
        hold = max(hold, cash - price - fee)

    return cash