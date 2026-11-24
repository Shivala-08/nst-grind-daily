import bisect


def maxEnvelopes(envelopes):
    if not envelopes:
        return 0

    # Sort width ascending; for equal widths, sort height descending
    envelopes.sort(key=lambda env: (env[0], -env[1]))

    # Standard Longest Increasing Subsequence (LIS) on heights
    tails = []
    for _, h in envelopes:
        idx = bisect.bisect_left(tails, h)
        if idx == len(tails):
            tails.append(h)
        else:
            tails[idx] = h

    return len(tails)