# Dijkstra's Algorithm
https://www.youtube.com/watch?v=GazC3A4OQTE&t=1s
Pathfinding problems - google maps etc

Orders things by the shortest distance.
If shortcuts are discovered even though they cover more nodes, will move this up the ordering as this happens.

One problem is that it has no accounting for direction, so you will probably need to implement some accounting for which direction generally you are going in so the algo doesn't spend a bunch of time it doesn't need to looking down those paths.

# A * Algorithm
https://www.youtube.com/watch?v=ySN5Wnu88nE&t=182s
Builds in the logic for making sure that Dijkstra's Algo goes in generally the right direction
Many fewer nodes on the stack because path that would be worse stops being traversed once it grows larger than the optimal

Note:
May preindex to save memory further but this would beon the DB side.