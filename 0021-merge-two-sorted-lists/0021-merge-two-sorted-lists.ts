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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy = new ListNode()
    let tail = dummy

    while (list1 && list2) {
        if (list1.val > list2.val) {
            tail.next = list2
            list2 = list2.next
        } else {
            tail.next = list1
            list1 = list1.next
        }

        tail = tail.next
    }

    if (list1) {
        tail.next = list1
    } else if (list2) {
        tail.next = list2
    }

    return dummy.next
};