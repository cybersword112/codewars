**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num1 =[]
    let num2 =[]

    function pullFromList(list){
        let res = []
        let current = list
        while(current){
            res.push(current.val)
            if(current.next != null){
                current = current.next
            }else{
                current = false
            }
        }
        return res.reverse()
    }

    function ListNode(x) {
        this.val = x;
        this.next = null;
    }

    function addToList(arr){
        let list = new ListNode(arr[0]);
        
        let selectedNode = list;
        
        for(let i = 1; i < arr.length; i++){
            selectedNode.next = new ListNode(arr[i]);
            selectedNode = selectedNode.next
        } 

        return list
    }

    num1 = BigInt(pullFromList(l1).join(''))
    num2 = BigInt(pullFromList(l2).join(''))

    console.log('num1 '+ num1)
    console.log('num2 '+ num2)

    let total = num1 + num2
    console.log('total:'+total)
    total = String(total).split('').map(item=> Number(item)).reverse()

    let totalList = addToList(total)
    return totalList



};