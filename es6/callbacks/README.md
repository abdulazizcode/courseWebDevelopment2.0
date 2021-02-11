#Callback functions in Javascript

--Everything in JS (almost everything in JavaScript is an Object
--We can pass the Objects as an arguments (parameters) in functions
--As functions are Objects we can allso pass them into functions as arguments it callas callback functions where one function is calling another function.

EX: function print(callback){
        callback();
}


--In JavaScript code runs from top to bottom so there are some cases that code runs (or must run) after something else happens and also not sequentially.This is called asynchronouns programmin.

--Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. 
