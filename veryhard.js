//Object prototype chain and prototypal inheritance exercise.
// Create a Person constructor that has three properties: name, job, and age.
// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.

//The class named 'Person' has a constructor method that has the properties 'name', 'job' & 'age'.
class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
//This method logs a message in the console indicading the person is exercising.
    exercise() {
      console.log(`${this.name} says, "Running is fun! - said no one ever."`);
    }
//This method logs athe person's name & job to the console.  
    fetchJob() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
//class Programmer has the constructor method that calls the parent class constructor super() to inherit from the Person class, additionally having its own new properties 'languages' & 'busy'.  
  class Programmer extends Person {
    constructor(name, job, age, languages = []) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true;
    }
  
    completeTask() {
      this.busy = false;
    }
  
    acceptNewTask() {
      this.busy = true;
    }
  
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
  
    learnLanguage(newLanguage) {
      this.languages.push(newLanguage);
    }
  
    listLanguages() {
      console.log(`${this.name} knows the following languages: ${this.languages.join(', ')}`);
    }
  }
//These lines create instances of the Person and Programmer classes with different sets of parameters.
  const person1 = new Person("Harold", "Backend Engineer", 20);
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
  const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

//These lines call the learnLanguage() method for each programmer instance to add new languages to their languages property.
  c1.learnLanguage("CSS");
  c2.learnLanguage("C++");
  c3.learnLanguage("JAVA");
  
//These lines log the person1 object and the programmer objects c1, c2, and c3 to the console.
  console.log(person1);
  console.log(c1);
  console.log(c2);
  console.log(c3);

//These lines call various methods on the person1 object and programmer objects c1, c2, and c3, and log their actions or properties to the console.
  person1.exercise();
  person1.fetchJob();
  c1.completeTask();
  c2.acceptNewTask();
  c3.offerNewTask();
  c1.listLanguages();
  c2.listLanguages();
  c3.listLanguages();