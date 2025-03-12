---
title: "dynamic arrays"
category: "data structures"
date: "05-03-2025"
---

# Data Structures: Dynamic Array

![Art](./slaves.jpg)

In some languages like Python and JavaScript, Dynamic arrays are the default

## Dynamic arrays solve the fixed size problem of arrays

Static arrays' size needs to be specified when created. This isn't the case for dynamic arrays, and it usually specifies a default size. Adding elements to the end of an array is called **pushing** to an array.
There is a pointer telling us where the last element is. This is also used to get the length of the array.

We can also **pop** values from an array. Pushing and popping values from the end of an array are O(1).

In memory (RAM), if a dynamic array runs out of space and needs to add another value to the end of the value, it will create a new array that will be able to store all the elements.

However, instead of just increasing by one extra element, the array will `double` in size. The original array will get deallocated, to free up space in RAM.


The two most common operations are **reading** and **writing** the data.

## Why does the array double in size?

First, allocating a new array is a big O(n), also including pushing all the values from the older array to the new one. 

Because of this, we double the capacity, which would be middle ground between not having to allocate a new array everytime, and also not having a bunch of empty space in our array.

If we had instead allocated a huge array from the start, we would be taking up a lot of memory from the operating system. 

Doubling the array would be called Amortized Time Complexity. It took big O(n), but on average will take big O(1), because the vast majority of the time we are adding an array, it would be big O(1). (Power Series)

The last term is always going to be greater than or equals to all the previous terms. O(2n) can be simplified to O(n). 

In be O time complexity, we do not care about constants (like O(2n), O(Xn)) as the runtime increases `linearly` with the input size (n)

It is different for powers, as it would exponentially increase the runtime. 


## Time complexities
The time complexities for static arrays is same as dynamic arrays. 

How do we use dynamic arrays?



  

