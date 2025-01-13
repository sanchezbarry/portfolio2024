---
title: "arrays"
category: "dev notes"
date: "13-01-2025"
---

# Data Structures: Array

![Art](./slaves.jpg)

A small introduction: as I refresh what I learn, I thought it would be useful to write down explanations of everything - from the simple stuff like
arrays to more complex algorithms and data structures. 

## What is a Data Structure?

A way of structuring data, specifically in RAM. RAM is measured in bytes.
1 byte = 8 bits. Bit is a position that can store a digit of a 0 or 1. 

- **Integer**: Each is stored in `4 byte`
- **Characters**: Each take just `1 byte` (ASCII)

We store values in a distinct location called address in RAM. We don't
necessarily choose where our data is stored in RAM, but it is contiguous;
i.e., there is nothing in between 2 values of data we want to store. The
address itself might increase by more than '1', but because integers take
up 4 bytes, they will increase by more than just '1'.

## Static Arrays

To be continued!

//

1. Limit the length of functions. Aim for 10-20 lines.
2. Avoid side effects. A function should not modify any hidden states.

## Comment Wisely

Comments should explain _why_, not _what_. Code should speak for itself.

- Use comments for clarification of complex code.
- Avoid redundant comments.

## Refactoring

Regularly refactor your code to make it cleaner.

- Remove duplicate code.
- Simplify complex logic.
- Break large functions into smaller ones.

## Consistent Formatting

Consistency is key.

- Stick to one coding style.
- Use linters and formatters like ESLint or Prettier.

## Avoid Deep Nesting

Deep nesting makes code harder to read and maintain.

```javascript
// Bad
if (condition) {
  if (anotherCondition) {
    // ...
  }
}

// Good
if (condition && anotherCondition) {
  // ...
}
```

## Error Handling

Don't ignore errors. Handle them gracefully.

- Use try-catch for error-prone code.
- Validate inputs to prevent errors.

## Stay DRY (Don't Repeat Yourself)

Avoid repetition. Use functions, classes, and modules.

## Readable Code over Clever Code

Readable code is always better than clever, tricky code.

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - _Martin Fowler_

## Continuous Learning

Stay updated with best practices and constantly improve your skills.

Writing clean code is a practice that develops over time with experience and constant learning. Always be open to new ideas and improvements!