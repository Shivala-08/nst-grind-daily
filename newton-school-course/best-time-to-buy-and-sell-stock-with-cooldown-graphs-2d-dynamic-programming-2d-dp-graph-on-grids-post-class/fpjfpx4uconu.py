import sys
from typing import List


def maxProfit(prices: List[int]) -> int:
    if not prices:
        return 0

    hold = -prices[0]
    sold = float("-inf")
    rest = 0

    for price in prices[1:]:
        prev_hold = hold
        prev_sold = sold
        prev_rest = rest

        hold = max(prev_hold, prev_rest - price)
        sold = prev_hold + price
        rest = max(prev_rest, prev_sold)

    return int(max(sold, rest))


def solve() -> None:
    data = sys.stdin.read().strip().split()
    if not data:
        print(0)
        return

    # If the first token is n and the remaining tokens equal n, treat token 0 as count;
    # otherwise treat all tokens as prices.
    nums = [int(x.strip("[](),")) for x in data]
    if len(nums) > 1 and nums[0] == len(nums) - 1:
        prices = nums[1:]
    else:
        prices = nums

    print(maxProfit(prices))


if __name__ == "__main__":
    solve()