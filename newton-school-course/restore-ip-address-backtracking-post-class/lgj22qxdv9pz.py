class Solution:
    def restoreIpAddresses(self, s: str) -> list[str]:
        result = []
        
        def backtrack(start_idx: int, path: list[str]):
            # If we have 4 segments and have used all characters, it's a valid IP
            if len(path) == 4:
                if start_idx == len(s):
                    result.append(".".join(path))
                return
            
            # An IP segment can be at most 3 digits long
            for length in range(1, 4):
                if start_idx + length > len(s):
                    break
                
                segment = s[start_idx:start_idx + length]
                
                # Check for valid segment:
                # 1. No leading zeros unless the segment is just "0"
                # 2. Value must be between 0 and 255 inclusive
                if (segment.startswith('0') and len(segment) > 1) or int(segment) > 255:
                    continue
                
                backtrack(start_idx + length, path + [segment])
        
        backtrack(0, [])
        return result