/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function deleteDuplicates(head: ListNode | null): ListNode | null {

    // create a list object
    // create a function that takes in the current node and returns the next node
        // checks cache for its presence, 
            // adds it to cache if not present and returns the node
            // if present, return the next node
    // while loop for the function return
    // function should return the list object 
    if(head == null || head.next == null){
        return head;
    }
    
    let currentNode = head
    while(currentNode) {
        if(currentNode.next !== null && currentNode.val == currentNode.next.val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return head
    
    };
    
    
    // given a linked list with sorted ascending values
    // return the same linked sorted list with any duplicats removed