---
title: "static arrays"
category: "data structures"
date: "13-01-2025"
---

# Data Structures: Array

![Art](./slaves.jpg)

A small introduction: as I refresh what I learn, I thought it would be useful to write down explanations of everything - from the simple stuff like
arrays to more complex algorithms and data structures. 

## What is a Data Structure?

A way of structuring data, specifically in RAM (Random Access Memory). RAM is measured in bytes.
1 byte = 8 bits. Bit is a position that can store a digit of a 0 or 1. 

- **Integer**: Each is stored in `4 byte`
- **Characters**: Each take just `1 byte` (ASCII)

We store values in a distinct location called address in RAM. We don't
necessarily choose where our data is stored in RAM, but it is contiguous;
i.e., there is nothing in between 2 values of data we want to store. The
address itself might increase by more than '1', but because integers take
up 4 bytes, they will increase by more than just '1'.

The two most common operations are **reading** and **writing** the data.

## Static Arrays

We use indexes to access values. The first value is at index 0. If we
have the index, we can instantly read any value. This is an efficient
operation called O(1) (big O of 1). It happens in constant time. No matter how big our array gets, we can read it instantly. 

1. Limit the length of functions. Aim for 10-20 lines.
2. Avoid side effects. A function should not modify any hidden states.

## To call

We can loop through the entire array with a for or while loop. 
We can start off with declaring an i=0 and calling it with myArray[i]

```javascript
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
```

## Writing to an array.
Arrays are of _fixed_ size. If we declare an array of 3 values, to add another value to it, we have to 

We can't simply add another value at the end of an array, as the next spot in the address (for it to still be contiguous) might not be available as it might have already been taken up by the different array or the OS is using it for other purposes. 

If we let the operating system just decide where the 4th value goes, then we would have 2 arrays, as it is not **contiguous**. We won't possibly be able to to loop through it as the 4th value has a different address.

**This is the biggest limitation of Static Arrays.**

With some modern languages like Python and JavaScript, this limitation doesn't exist as those languages do not offer static arrays. These use dynamic arrays as a default. 

- When you are removing a value from a static array, you're not removing it, but replacing with with another value even just an arbitrary one. 

Writing and removing any value in any position of an array is also O(1).

If we like to insert to the END of an array and there is space available, it is O(1).

However, inserting at the start or at any other position, isn't.

To insert a value at the start of the array, we would first have to shift the rest of the values of the array down by 1. Only after we have performed the shift then we can add the new value.

The downside is that we would have to move all the values, then write to the empty space at the front. With a very long array, this is not efficient; a O(n). In O(n), where n is the number of elements in the array, which would also be the length of the array.

Big O is a generalisation, and refers to the 'worst case' - i.e., the worst possible performance. 

This also applies for removing a value and wanting the values moved down to the first.

## Static Arrays Performance

| Operation         | Big-O Time  |
| ----------------- | ----------- |
| r/w i-th element  | O(1)        |
| Insert/Remove End | O(1)        |
| Insert Middle     | O(n)        |
| Remove Middle     | O(n)        |


> Testing different markdown formats.  

