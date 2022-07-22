# Depth First Search
https://www.youtube.com/watch?v=PMMc4VsIacU

Graph traversal - algorithm to visit every vertex of a graph
Hope to explore all of the verticies
Basically goes through every vertex and then back again
Can have multiple types of ordering
Instructions on how to execute may tell you which order you should write your algo
Naturally recursive

## Implementations

marked = [False] * G.size()
def dfs(G, v):
    visit(v)
    marked[v] = True
    for w in G.neighbors(v):
        if not marked[w]:
            dfs(G, w)

Implementation 2 (stack)

marked = [False] * G.size()
def dfs_iter(G,v):
    stack = [v]
    while len(stack) > 0:
    v = stack.pop()
    if not marked[v]:
        visit(v)
        marked[v] = True
        for w in G.neightbors(v):
            if not marked[w]:
                stack.append(w)

both fo these run in O(V + E) time
1 is cleaner and easier to read but 2 is more generalizable

## Preorder Vs Post Order
Preorder: puts indexes in first up up to end of order
Postorder: only adds vertices after we have reached the end.

Preorder visit comes first

marked = [False] * G.size()
def dfsPre(G, v):
    visit(v)
    marked[v] = True
    for w in G.neighbors(v):
        if not marked[w]:
            dfs(G, w)



Postorder moves visit to end

marked = [False] * G.size()
def dfsPost(G, v):
    marked[v] = True
    for w in G.neighbors(v):
        if not marked[w]:
            dfs(G, w)
    visit(v)

# Problems to solve
### Cycle Detection - figuring out if there is a cycle in a graph
### Finding Connected Components - will give you all connected components
### Topological Sort - figures out which task should be done first in a graph -order of steps
    This can be done with a Reverse DFS Postorder 
### Maze Generation
    Most mazes have a grid that they run on
    Can insert neighbors randomly into the stack creating a maze
