var count = 0;
document.getElementById('star').addEventListener('click', () => {
    document.querySelector('#startquiz').style.display = "none";
    document.querySelector('#container').style.display = "flex";
    document.querySelector('.score').style.display = "grid";
    getQuestion();
    answer();

}); var userselect = 'x';

var incorr=0;
var scor = 0;
function getAnswer() {
    var radioButtons = document.getElementsByName('x');
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {

            console.log("Selected value: " + radioButtons[i].value);
            userselect = radioButtons[i].value;
            console.log(userselect);
            colorch();
            answer();

            break;
        }
    }
};
let elements = document.getElementsByClassName('op');

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", getAnswer);
    
}


const Quess = {

    1: {
        quest: "What is JavaScript?",
        a: "A programming language used for creating dynamic and interactive websites.",
        b: "A type of coffee favored by developers.",
        c: "A database management system.",
        d: "A markup language for styling web pages.",
        ans: "a"
    },
    2: {
        quest: "Which of the following is NOT a JavaScript data type?",
        a: "String",
        b: "Boolean",
        c: "Number",
        d: "Float",
        ans: "d"
    },
    3: {
        quest: "What does the 'Math.floor()' function do in JavaScript?",
        a: "Rounds a number up to the nearest integer.",
        b: "Rounds a number down to the nearest integer.",
        c: "Rounds a number to the nearest integer.",
        d: "Returns the largest integer less than or equal to a given number.",
        ans: "b"
    },
    4: {
        quest: "Which operator is used to assign a value to a variable?",
        a: "=",
        b: "==",
        c: ":=",
        d: "===",
        ans: "a"
    },
    5: {
        quest: "What does the '=== operator' do in JavaScript?",
        a: "Checks if two values are equal in value and type.",
        b: "Assigns a value to a variable.",
        c: "Checks if two values are equal only in value.",
        d: "Compares two values.",
        ans: "a"
    },
    6: {
        quest: "Which function is used to output data in JavaScript?",
        a: "console.log()",
        b: "print()",
        c: "write()",
        d: "display()",
        ans: "a"
    },
    7: {
        quest: "What does the 'typeof' operator do in JavaScript?",
        a: "Returns the type of a variable or expression.",
        b: "Checks if a variable is defined.",
        c: "Performs a type conversion.",
        d: "Returns the value of a variable.",
        ans: "a"
    },
    8: {
        quest: "Which statement is used to exit or terminate a loop?",
        a: "exit",
        b: "break",
        c: "stop",
        d: "terminate",
        ans: "b"
    },
    9: {
        quest: "What is the correct way to write a JavaScript array?",
        a: "var colors = ['Red', 'Green', 'Blue'];",
        b: "array colors = {'Red', 'Green', 'Blue'};",
        c: "colors = {'Red', 'Green', 'Blue'};",
        d: "colors = ['Red', 'Green', 'Blue'];",
        ans: "a"
    },
    10: {
        quest: "Which symbol is used for single-line comments in JavaScript?",
        a: "//",
        b: "/* */",
        c: "#",
        d: "'",
        ans: "a"
    },
    11: {
        quest: "What is the purpose of the 'document.getElementById()' method in JavaScript?",
        a: "To get the value of an element by its class name.",
        b: "To get the value of an element by its tag name.",
        c: "To get the value of an element by its ID.",
        d: "To get the value of an element by its name attribute.",
        ans: "c"
    },
    12: {
        quest: "Which method is used to add a new item to the end of an array?",
        a: "push()",
        b: "append()",
        c: "insert()",
        d: "add()",
        ans: "a"
    },
    13: {
        quest: "What does the 'this' keyword refer to in JavaScript?",
        a: "It refers to the current function being executed.",
        b: "It refers to the global object.",
        c: "It refers to the parent object of a method.",
        d: "It refers to the object on which a method is invoked.",
        ans: "d"
    },
    14: {
        quest: "Which event occurs when the user clicks on an HTML element?",
        a: "onmouseover",
        b: "onchange",
        c: "onclick",
        d: "onselect",
        ans: "c"
    },
    15: {
        quest: "What is the purpose of the 'typeof' operator in JavaScript?",
        a: "To determine the type of a variable.",
        b: "To convert a variable to a different type.",
        c: "To check if a variable is defined.",
        d: "To assign a value to a variable.",
        ans: "a"
    },
    16: {
        quest: "Which method is used to remove the last item from an array?",
        a: "pop()",
        b: "removeLast()",
        c: "deleteLast()",
        d: "splice()",
        ans: "a"
    },
    17: {
        quest: "Which statement is used to declare a function in JavaScript?",
        a: "def",
        b: "function",
        c: "fun",
        d: "declare",
        ans: "b"
    },
    18: {
        quest: "Which operator is used to concatenate strings in JavaScript?",
        a: "+",
        b: "&",
        c: "&&",
        d: "||",
        ans: "a"
    },
    19: {
        quest: "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
        a: "To parse a JSON string.",
        b: "To convert a JavaScript object into a JSON string.",
        c: "To convert a JSON string into a JavaScript object.",
        d: "To format a JSON string.",
        ans: "b"
    },
    20: {
        quest: "What does the 'querySelector()' method do in JavaScript?",
        a: "Returns the first element that matches a specified CSS selector.",
        b: "Returns an array of all elements that match a specified CSS selector.",
        c: "Returns the value of the first element that matches a specified CSS selector.",
        d: "Returns the value of an element by its ID.",
        ans: "a"
    },
    21: {
        quest: "What is the purpose of the 'parseInt()' function in JavaScript?",
        a: "To convert a string into an integer.",
        b: "To convert a number into a string.",
        c: "To convert a string into a floating-point number.",
        d: "To convert a floating-point number into an integer.",
        ans: "a"
    },
    22: {
        quest: "Which method is used to add new elements to the beginning of an array?",
        a: "unshift()",
        b: "prepend()",
        c: "addFirst()",
        d: "insertFirst()",
        ans: "a"
    },
    23: {
        quest: "What is the purpose of the 'addEventListener()' method in JavaScript?",
        a: "To add a new event listener to an HTML element.",
        b: "To remove an event listener from an HTML element.",
        c: "To check if an event listener is attached to an HTML element.",
        d: "To trigger an event on an HTML element.",
        ans: "a"
    },
    24: {
        quest: "What does the 'splice()' method do in JavaScript?",
        a: "Adds new elements to an array.",
        b: "Removes elements from an array and optionally replaces them.",
        c: "Sorts the elements of an array.",
        d: "Concatenates two or more arrays.",
        ans: "b"
    },
    25: {
        quest: "Which statement is used to skip the rest of the current iteration in a loop?",
        a: "skip",
        b: "next",
        c: "continue",
        d: "pass",
        ans: "c"
    },
    26: {
        quest: "What does the 'Array.isArray()' method do in JavaScript?",
        a: "Checks if a variable is an array.",
        b: "Converts a variable into an array.",
        c: "Creates a new array.",
        d: "Removes an element from an array.",
        ans: "a"
    },
    27: {
        quest: "What does the 'NaN' property represent in JavaScript?",
        a: "Not a Number",
        b: "Negative Absolute Number",
        c: "Newly Assigned Number",
        d: "Nullified Array Name",
        ans: "a"
    },
    28: {
        quest: "Which operator is used to concatenate arrays in JavaScript?",
        a: "+",
        b: "&",
        c: "&&",
        d: "||",
        ans: "a"
    },
    29: {
        quest: "What does the 'Math.random()' function do in JavaScript?",
        a: "Generates a random number between 0 (inclusive) and 1 (exclusive).",
        b: "Generates a random number between 0 and 1 (inclusive).",
        c: "Generates a random integer between two specified values.",
        d: "Generates a random integer between 0 and a specified value.",
        ans: "a"
    },
    30: {
        quest: "What does the 'Math.floor()' function do in JavaScript?",
        a: "Rounds a number up to the nearest integer.",
        b: "Rounds a number down to the nearest integer.",
        c: "Rounds a number to the nearest integer.",
        d: "Returns the largest integer less than or equal to a given number.",
        ans: "b"
    },
    31: {
        quest: "Which method is used to join the elements of an array into a string?",
        a: "join()",
        b: "concat()",
        c: "merge()",
        d: "combine()",
        ans: "a"
    },
    32: {
        quest: "What is the purpose of the 'setInterval()' function in JavaScript?",
        a: "To execute a function repeatedly, with a fixed time delay between each call.",
        b: "To execute a function after a specified number of milliseconds.",
        c: "To execute a function once, after a specified number of milliseconds.",
        d: "To execute a function repeatedly, until stopped.",
        ans: "a"
    },
    33: {
        quest: "Which method is used to convert a string to lowercase in JavaScript?",
        a: "toLowerCase()",
        b: "toLower()",
        c: "lowerCase()",
        d: "convertToLower()",
        ans: "a"
    },
    34: {
        quest: "What is the purpose of the 'localStorage' object in JavaScript?",
        a: "To store data with no expiration date.",
        b: "To store data for the duration of the browser session.",
        c: "To store session-specific data.",
        d: "To store temporary data that is deleted when the browser is closed.",
        ans: "a"
    }

};


const getQuestion = () => {
incorr=0;


    count = count + 1;
    document.querySelector("#quesNo").innerHTML=`${count}/25`;
    if(count>25){
        document.querySelector('#container').style.display = "none";
        document.querySelector('#result').style.display = "flex";
        document.querySelector('#finalScore').innerHTML = `${scor}/25`;
    }

    document.querySelector("#quest").innerHTML = `${Quess[count].quest}`;
    document.querySelector(`.opta`).innerHTML = `${Quess[count].a}`;
    document.querySelector(`.optb`).innerHTML = `${Quess[count].b}`;
    document.querySelector(`.optc`).innerHTML = `${Quess[count].c}`;
    document.querySelector(`.optd`).innerHTML = `${Quess[count].d}`;

}
document.querySelector('#next').addEventListener('click', () => {
    let elements = document.querySelectorAll('.op');

    elements.forEach(element => {
        element.style.backgroundColor = "rgb(72, 72, 73)";
    });
    getQuestion();

})

function answer() {

    if (userselect == Quess[count].ans && scor<count && incorr<=0) {
        
        scor = scor + 1;
        document.querySelector('.score').innerHTML = `SCORE : ${scor}`;
      
    }
    else if(userselect != Quess[count].ans && count>1){
incorr=1;
    }

   }


function colorch() {
    document.querySelector(`#aa`).style.backgroundColor = "brown";
    document.querySelector(`#bb`).style.backgroundColor = "brown";
    document.querySelector(`#cc`).style.backgroundColor = "brown";
    document.querySelector(`#dd`).style.backgroundColor = "brown";
    document.querySelector(`#${Quess[count].ans}${Quess[count].ans}`).style.backgroundColor = "green";
}

function last(){

}