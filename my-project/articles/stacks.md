---
title: "stacks"
category: "data structures"
date: "12-03-2025"
---

# Data Structures: Stacks

Stacks support 3 operations. You can push and pop (to the ends of a stack), and you can look (peek/top) at the last element at the end of a stack. All of them are big O(1), a constant time operation. 

## Dynamic arrays meet the requirements to be a stack.

A stack can be implemented using a dynamic array. You can typically use the default dynamic array in the programming language you are using. 

Stacks can be also thought of as an **vertical array**. So when you push an element to the top of an empty stack, it will `fall` to the bottom. So pushing to the top would drop the value to the end of the stack.

Stacks are simply a common use case of dynamic arrays. 

## Popping

Popping works similary, where the ends of the array gets removed (i.e., from the top of the stack). Internally, the last element doesn't get deleted, but the new end of the array is defined as 1 element before.

The order the elements were inserted in, is the reversed of the order the elements are removed. The last element added to the stack will be the first to be removed. 


## Stacks are a LIFO data structure
LIFO - Last In, First Out




  

