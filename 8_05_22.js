/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    // //     create a new array from the provided arrays
    //     console.log(JSON.stringify(list1))
    //     let newList1 = []
    //     let newList2 = []
    //     let currentNode = list1
    //     while(currentNode){
    //         newList1.push(currentNode.val)
    //         currentNode = currentNode.next
    //     }
    //     currentNode = list2
    //     while(currentNode){
    //         newList2.push(currentNode.val)
    //         currentNode = currentNode.next
    //     }
    //     console.log(newList1,newList2)
    //     let sortedCombinedArray = [...newList1,...newList2]
    // //     sort and return that new array
    //     sortedCombinedArray = sortedCombinedArray.sort()
    //     console.log(sortedCombinedArray)
    //     let nestedObj ={}
    //     let newObject={}
    //     newObject['val'] = sortedCombinedArray[0]
    //     newObject['next'] = nestedObj
    //     for(let i = 1 ; i<sortedCombinedArray.length;i++){
    //             nestedObj['val'] = sortedCombinedArray[i] 
    //             nestedObj['next'] = nestedObj
    //     }
    //     console.log(newObject)
    //     return sortedCombinedArray
        
        let nullNode = { val: 0, next: null };
        let prev = nullNode;
        while (list1 && list2) {
            if (list1.val >= list2.val) {
                prev.next = list2;
                list2 = list2.next;
            } else {
                prev.next = list1;
                list1 = list1.next;
            }
            prev = prev.next;
        }
        prev.next = list1 || list2;
        return nullNode.next;
        
        
    };
    
    // input will be two sorted arrays of ints between -100 and 100
    // output will be an array of sorted ints combined from the two provided arrays
    
    // console.log(mergeTwoLists([1,3,4,7],[2,5,6]),[1,2,3,4,5,6,7])