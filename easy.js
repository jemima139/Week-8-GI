// 1. A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes a certain exercise. The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
  //Write one function that can dynamically print the value of the exercise for that day, and it must be closure.
 
// a function called 'exerciseOfTheDay' with a variable presentExercise is created.
function exerciseOfTheDay() {
    let presentExercise = "";

   
    return function(exercise) {
        if (exercise) {
            presentExercise = exercise;
            console.log("Today's exercise:", presentExercise);
        }
        
        return presentExercise;
    };
}


const exercise = exerciseOfTheDay();


console.log(exercise("Running")); // Output: Today's exercise: Running
console.log(exercise("Swimming")); // Output: Today's exercise: Swimming
console.log(exercise("Dancing")); // Output: Today's exercise: Dancing
console.log(exercise("Fencing")); // Output: Today's exercise: Fencing






