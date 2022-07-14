https://www.youtube.com/watch?v=-gjxg6Pln50

# What is the Pattern
Saves time and space by starting at two sides of the array and iterating from both sides
Usually starts from the first index and iterates through the data structure one or more times depending on code implementation
Using only one will not give us the most efficient result so often you will use two to work backwards through the array at the same time and compare to the first part
One pointer may move at a slow pace, while another moves at a faster pace (tortoise and the hare type problems)
Lots of while loops while left < right

# When to use
* problems involving collections of arrays or lists where we need to analyze each element of the collection compared to its other elements
* can be used on strings and arrays

## Two Sum problem - 
assume you have a sorted array
both indecies move in conjunction and depend on each other.
this keeps going until it either finds the target or both pointers meet in the middle
time complexity of this is O(n)

<scirpt> 
var arr = [1,2,3,4,5]
//add up to 6
var twoSum(arr, targetValue) {
var pointer_one = 0
var pointer_two = arr.length - 1

    while (pointer_one < pointer_two) {
        if (arr[pointer_one] + arr[pointer_two] === tragetValue) {
            return true
        }
        else if (arr[pointer_one] + arr[pointer_two] < targetValue) {
            pointer_one += 1
        } else {
            pointer_two -+ 1
        }
    }
    return false // if none is found
}

</script>

# Other use case
* used to detect whether there is a cycle in a linked list, idea is to move a fast pointer twice as fast as the slow one so distance increases +1 each time.
* (Tortoise and the hare).
* Time complexity O(n) (linear)

<script>
    function detectCycle(Node, head) {
        var head = Node.head, slow = Node.head;
        while (fast !== null && fast.next!==null) {
            slow = slow.next;
            fast = fast.next.next; //skips ahead two instead of one
            if (slow === fast) return true;
        }
        return false;
    }
</script>