---
title: "singly linked lists"
category: "data structures"
date: "17-03-2025"
---

# Linked Lists

Linked Lists are made up of ListNodes (sometimes just called nodes). It's an object that encapsulates 2 things at a minimum;

1. The value of the list node (integer, character, object, etc)
2. A next. A next is pointer and will tell us what is the next listnode in the linked list. If the value of the next is null, it means there isn't any more links. 

## You can assign the following list node with .next

ListNode1.next = ListNode2

Linked Lists are not stored in memory the same way we use/assign them. It could be randomly stored. 

This is different to how arrays are stored, which are stored the same way in memory as they are in the array itself.

## Looping through a linked list

cur = ListNode1
while(cur !=null)
    cur = cur.next

This works as the last node in the Linked List would have a next of null.

The time complexity would be a big O(n), similar to arrrays.

## Other similarities to arrays

The head and the tail of the linked lists are pretty important. If the tail and head points to the same listnode, it means that the linked list has a size of 1. 

To add to the end of the a linked list,

tail.next = ListNode4
tail = ListNode4
// or: tail = tail.next

This is a constant time operation O(1), as we knew where the tail was. This is pretty much the same in an array.

Removing a ListNode is also a constant time operation, with a caveat, where there is another pointer to assign to;

head.next = head.next.next

We don't have to shift everything over, like we would with an array. However with bigger lists and needing to iterate through the link to find the node we want to delete, it would generally be big O(n)

In most languages and OSes, the removed listnode is taken care of (deleted, unassigned, etc) by itself. 
  

