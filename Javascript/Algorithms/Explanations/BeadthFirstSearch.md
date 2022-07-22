# Breadth First Search
https://www.youtube.com/watch?v=xlVX7dXLS64

Finds the shortest path from one vertex to the next naturally.
Starts at one node and marks all of the ones closest, then the next closest, and so on until finding the path to the desired element.

marked = [false] * G.size()
def breadthFirstSearch(G, v):
    queue = [v]
    while len(queue) > 0;
        v = queue.pop(0)
        if not marked[v]:
            visit(v)
            marked[v] = True
            for w in G.neighbors(v):
                if not marked[w]:
                    queue.append(w)

Flood Fill Problem:
simulates the same concept as msPaint's bucket fill

ex [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

def FloodFill(img, row, col, p):
 start = img[row][col]
 queue = [(row, col)]
 visited = set()
 while len(queue) > 0:
    row, col = queue.pop(0)
    visited.add((row,col))
    img[row][col] = p
    for row, col in neighbors(img,row,col,start):
        if (row,col) not in visited:
            queue.append((row,col))
    return img

def neighbors(img,row,col,start):
    indices = [(row - 1, col), (row + 1, col), (row, col-1), (row, col+1)]
    return [(row,col) for row, col in indices if isValid(img,row,col) and img[row][col] == start]

def isValid(img, row, col):
    return row >= 0 and col >= 0 and row < len(img) and col < len(img[0])>