// 328. Odd Even Linked List

// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL

// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL

// /**
//  * Definition for singly-linked list.
// function show() added for debugging. 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
        this.show = function() {
            console.log(this.val);
            if (this.next) {
                this.next.show();
            }
        }
    }

// Test input for example 1 (1->2->3->4->5->NULL) defined as below:

var n5 = new ListNode(5, null);
var n4 = new ListNode(4, n5);
var n3 = new ListNode(3, n4);
var n2 = new ListNode(2, n3);
var n1 = new ListNode(1, n2)

// SOLUTION 1. (My own.)
// Faster than 71.96%; more memory efficient than 5.59% JavaScript submissions.
// This is by no means the most efficient solution, nor really “in-place”.
var oddEvenList1 = function(head) {
    // Takes care of edge case of empty linked list.
    if (!head) {
        return head;
    }

    // Puts all nodes in the linked list respectively to an
    // array for odd nodes and the other for even nodes.
    let oddNodes = [];
    let evenNodes = [];
    let count = 1;
    let curNode = head;
    while(curNode) {
        if (count%2==1) {
            oddNodes.push(curNode)
        } else {
            evenNodes.push(curNode)
        }
        curNode = curNode.next;
        count ++;
    }
    
    // Concatenate the two above arrays.
    allNodes = oddNodes.concat(...evenNodes)
    
    // Put all elements in the full array back to
    // the linked list
    let p = allNodes.length-1;
    allNodes[p].next = null;
    while (p>0) {
        allNodes[p-1].next = allNodes[p]
        p--;
    }

    // Return the head node of the list.
    return allNodes[0];
};

// Test

// oddEvenList2(n1)
// n1.show()


var temp = null;
if(!temp) {
    console.log("Hello.")
}