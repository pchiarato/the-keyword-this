//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // the "this" keyword is an placeholder for the object that will be calling the function either implict or explicit.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //explicit => you intentionally bind it to an object using .call .apply and bind.

        //implicit => this key word will be used to what ever object is invoking to the left of the period ex: obj.function(args);

  // 3) What is the difference between call and apply?

      // .call takes an object as first paramter followed by arguments separated by commas,
    // apply takes an object as first paramter and an array [] with the arguments inside of them.

  // 4) What does .bind do?

     //binds the "this" function to an object when saved to a variable to be called at a later time.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user ={username:"phillip",email:"phillip@gmail.com",getUsername:function(){return this.username;}}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
                user.getUsername();

//Next Problem


// Write a constructor function, including method definitions, which will make the following function invocations function properly.


        function Car(manufacture,model,year){
            this.manufacture = manufacture;
            this.model = model;
            this.year = year;
            this.move = 0;
            this.moveCar = function(){
                return this.move+=10;
            }
        }


  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  getYear.call(prius);
  getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  // myUser => username;

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

   //after it was bounded to the object myUser it was bounded to that. 


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

