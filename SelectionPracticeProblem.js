console.log("Welcome to Selection Practice Problem")

//Selection Practice Problems with if else if and else

//Printing Digit 
let number = Math.floor(Math.random()*10)%10;
console.log("Number : "+ number);

if (number == 1) 
{
    console.log("One");
} else if (number == 2) 
{
    console.log("Two");
} else if (number == 3) 
{
    console.log("Three");
} else if (number == 4) 
{
    console.log("Four");
} else if (number == 5) 
{
    console.log("Five");
} else if (number == 6) 
{
    console.log("Six");
} else if (number == 7) 
{
    console.log("Seven");
} else if (number == 8)
{
    console.log("Eight");
} else if (number == 9)
{
    console.log("Nine");
} else if (number == 0) 
{
    console.log("Zero");
} else 
{
    console.log("Invalid number");
}


//Printing Random day of the week
let dayNumber = Math.floor(Math.random()*7) + 1;
console.log("Number : "+dayNumber);
if (dayNumber == 1) 
{
    console.log("Sunday");
} else if (dayNumber == 2) 
{
    console.log("Monday");
} else if (dayNumber == 3) 
{
    console.log("Tuesday");
} else if (dayNumber == 4) 
{
    console.log("Wednesday");
} else if (dayNumber == 5) 
{
    console.log("Thursday");
} else if (dayNumber == 6) 
{
    console.log("Friday");
} else if (dayNumber == 7) 
{
    console.log("Saturday");
} else 
{
    console.log("Number not valid");
}


//Display Unit Tens thousands so on ....
let power = Math.floor(Math.random()*10)%7;
let num = 10**power;
console.log("Number : "+number);

if (num == 1) 
{
    console.log("One");
} else if (number == 10) 
{
    console.log("Ten");
} else if (number == 100) 
{
    console.log("Hundred");
} else if (number == 1000) 
{
    console.log("Thousand");
} else if (number == 10000) 
{
    console.log("Ten thousand");
} else if (number == 100000) 
{
    console.log("One Lakh");
} else if (number == 100000) 
{
    console.log("Ten Lakh");
} else 
{
    console.log("Input value not defined.");
}

