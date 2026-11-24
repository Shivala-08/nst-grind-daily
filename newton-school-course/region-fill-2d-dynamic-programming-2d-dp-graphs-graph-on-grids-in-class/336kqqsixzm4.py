from collections import deque
import sys


def flood_fill(
    image: list[list[int]], sr: int, sc: int, color: int
) -> list[list[int]]:
  m, n = len(image), len(image[0])
  orig = image[sr][sc]
  if orig == color:
    return image

  queue = deque([(sr, sc)])
  image[sr][sc] = color
  directions = ((-1, 0), (1, 0), (0, -1), (0, 1))

  while queue:
    r, c = queue.popleft()
    for dr, dc in directions:
      nr, nc = r + dr, c + dc
      if 0 <= nr < m and 0 <= nc < n and image[nr][nc] == orig:
        image[nr][nc] = color
        queue.append((nr, nc))

  return image


def main() -> None:
  data = sys.stdin.read().strip().split()
  if not data:
    return

  m = int(data[0])
  n = int(data[1])
  sr = int(data[2])
  sc = int(data[3])
  color = int(data[4])

  idx = 5
  image = []
  for _ in range(m):
    row = [int(x) for x in data[idx : idx + n]]
    image.append(row)
    idx += n

  result = flood_fill(image, sr, sc, color)
  for row in result:
    print(" ".join(map(str, row)))


if __name__ == "__main__":
  main()