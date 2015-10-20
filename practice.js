//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // The 'this' keyword allows us to create data structures in javascript that can be 
      // defined based on an unspecified object.  The object can be assigned implicity, explicityly,
      // with the new keyword, or default.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // implicity, explicitly, new keyword, or default.  Implicity is when you call a method on a function,
      // the this is assigned to whatever the object to the left of the method is (object.method).  
      // explicity assigning is when you use methods call() apply(), or bind(), to pass in the object
      // that this corresponds to, specifically.
      // new keyword allows you to create new object from constructor function, where this corresponds to
      // whatever object you're assigning left of new keyword
      // default rule is that this corresponds to window object, if you use it in global scope, 
      // with no reference to global scope

  // 3) What is the difference between call and apply?

      //  call takes in comma separated list of parameters (after first param is what this is bound to )
      // apply takes in same first param, but 2nd param is argument, which contains params
      // both work in very similar way, besides this small difference

  // 4) What does .bind do?

      // bind allows you to create a new function, based on which object you bind.  unlike call/apply, which
      // invoke function immediately, bind doesn't invoke, and instead you need to store functino somewhere,
      // either using callback, or variable assignment.  bind() also means you don't need to pass in all arguments
      // with bind, you can past ones that aren't defined later, when actually invoking the function.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. 
  // *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: 'pkrieg',
  email: 'pkrieg2@gmail.com',
  getUsername: function(){
    return this.username;
  }
};

user.getUsername();

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.


function Car(make, model, year, position){
  this.make = make;
  this.model = model;
  this.year = year;
  this.position = position || 0;   // default value of position prop is 0, ie if nothing is entered in
}


  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned 
// from the Car function. You'll also need to use the 'this' keyword properly in order to 
// make sure you're invoking moveCar on the write object (prius vs mustang).

Car.prototype.moveCar = function(){
  this.position+=10;
  return this.position;
};

//Continuation of previous problem

var getYear = function(){
  return this.year;
};


//Above you're given the getYear function. Using your prius and mustang objects from above, 
// use the proper syntax that will allow for you to call the getYear function with the prius 
// then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

Car.prototype.getYear = getYear;



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 2000);

//Above you're given an object, a function, and a setTimeout invocation. 
// After 5 seconds, what will the getUsername function return?

// undefined, because this.username doesn't access any object, so it looks in global scope to find
// variable username, which probably wouldn't exist.  

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  // this is bound to global scope, window.  It definitely isn't bound to the object, which it needs to be

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

setTimeout(getUsername.bind(user), 1000);






