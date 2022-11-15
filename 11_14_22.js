/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
	current = head
	while (current) {
		current.increment = (current.increment || 0) + 1
		if (current.increment > 1) {
			return true
		}
		current = current.next
	}
	return false
};