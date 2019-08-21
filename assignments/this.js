/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: When creating top-level variables, the value of 'this' is the overall window, sort of like the browser 

* 2. Implicit Binding: When calling a method on an object using dot notation, 'this' refers to the specific object preceding the dot. 'This' will vary depending on the context/specific object you are referring to 

* 3. New Binding: When we build constructor functions, 'this' refers to the specific instance of the object being created

* 4. Explicit Binding: We can override the default values of constructor functions properties by explicitly defining 'this' using .call, .apply and .bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// Eg top-level primitive data
var myAge = 21;
// console.log(window.myAge);

// Principle 2

// code example for Implicit Binding

var meg = {
    name: 'Megan Ennis',
    activity: 'dance',
    doSomething: function() {
        return `My name is ${this.name} annd I am ${this.activity}ing!`;
    },
}
//console.log(meg.doSomething());

// Principle 3

// code example for New Binding
function Student(name, age, course){
    this.name = name;
    this.age = age;
    this.course = course;
}

// Two new students are created below using the new keyword, 'this' in the constructor function refers to each particular instance
let student1 = new Student('Zoe', 33, 'Full Stack Web Dev');
let student2 = new Student('Noah', 27, 'Data Science');


// Principle 4

// code example for Explicit Binding

function dog(name, breed){
    return `${name} is a ${breed}`;
}

dog.call('dog1', 'Doug', 'Labrador');
dog.apply('puppies', ['Doug', 'Labrador']);