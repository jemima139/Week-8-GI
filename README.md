Problem 1: # Exercise of the Day Program

## Description
This program implements an "exercise of the day" feature for a local gym. The gym offers a free class each day promoting a specific exercise. The program provides backend logic to update the system dynamically, reflecting which exercise will be promoted on a particular day. It includes a function that takes the name of an exercise as input and logs a message indicating the exercise of the day. The implementation utilizes closure to achieve dynamic printing of the exercise value.

## Implementation Details
The core function in this program is `exerciseOfTheDay()`, which returns another function using closure. The returned function sets and logs the exercise of the day when invoked with the name of the exercise as an argument. It maintains the state of the current exercise using a variable `presentExercise`.

### Function: exerciseOfTheDay
- **Description**: Returns a function that sets and logs the exercise of the day.
- **Input**: Name of the exercise (String).
- **Output**: Logs a message indicating today's exercise and returns the current exercise.

## Usage
To use this program, follow these steps:
1. Call the `exerciseOfTheDay()` function to initialize the closure.
2. Use the returned function to set and log the exercise of the day by passing the name of the exercise as an argument.
3. The program will log a message indicating today's exercise.

Problem 2: # Pizza Sharing Calculator

## Description
This function calculates how many slices of pizza each person would get if they shared a pizza evenly. It takes two parameters:
- `totalSlices`: Total number of slices in the pizza.
- `numberOfPeople`: Number of people sharing the pizza.

The function returns an interpolated string indicating the number of slices each person gets, considering any leftover slices if the pizza cannot be split evenly.

## Function: sharePizza
- **Description**: Calculates the number of slices each person would get when sharing a pizza evenly.
- **Input**:
  - `totalSlices`: Total number of slices in the pizza (Integer).
  - `numberOfPeople`: Number of people sharing the pizza (Integer).
- **Output**: An interpolated string indicating the number of slices each person gets.

Problem 3: # Personally Identifiable Information (PII) Protection

## Description
This program demonstrates how to create a closure to encapsulate Personally Identifiable Information (PII) within an object while providing controlled access to specific properties. The PII object contains two properties: `name` and `SSN` (Social Security Number). However, only the `name` property is accessible through a public function (`getName()`), while the `SSN` property remains inaccessible.

## Implementation Details
The core function `PII` creates a closure by defining private variables `privateName` and `privateSSN` within its scope. Two public functions, `getName()` and `getSSN()`, are defined within the closure to allow controlled access to the `name` and `SSN` properties, respectively.

### Function: PII
- **Description**: Creates a PII object wrapping sensitive information (name and SSN).
- **Input**:
  - `name`: Name of the individual (String).
  - `SSN`: Social Security Number (String).
- **Output**: An object with public functions `getName()` and `getSSN()`.


  Problem 4: # Object Prototype Chain and Prototypal Inheritance Exercise

This exercise demonstrates prototypal inheritance in JavaScript by implementing two classes: `Person` and `Programmer`. The `Programmer` class inherits from the `Person` class and adds additional properties and methods specific to programmers.

## Classes Overview

### Class: Person
- **Constructor**: Initializes `name`, `job`, and `age` properties.
- **Methods**:
  - `exercise()`: Logs a message indicating the person is exercising.
  - `fetchJob()`: Logs the person's name and job.

### Class: Programmer (extends Person)
- **Constructor**: Inherits properties from `Person` and adds `languages` and `busy` properties.
- **Methods**:
  - `completeTask()`: Sets `busy` property to false.
  - `acceptNewTask()`: Sets `busy` property to true.
  - `offerNewTask()`: Logs a message based on whether the programmer is busy.
  - `learnLanguage(newLanguage)`: Adds a new language to the `languages` array.
  - `listLanguages()`: Logs all languages known by the programmer.
