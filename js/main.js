// Question 1
var num1 = 10;
var num2 = 50;
console.log(num1 + num2);
var str1 = "10";
var str2 = "50";
console.log(str1 + str2);

// Question 2
var languages = [
    ['Java', 'C++'],
    ['Python', 'Ruby'],
    ['JavaScript'],
    ['HTML','CSS']
];
console.log(languages[0][1]);
console.log(languages[2][0]);

//Question 3
var cap = prompt("Enter a number: ");

if(cap < 100){
    alert("Your number is less than 100");
}else{
    alert("Your nummber was: " + cap + ", which is greater than 100");
}

// Question 5
var string = "String";
var prompted = prompt("String: ");
if(string === prompted){
    alert(string + " is equal to " + prompted);
}else{
    alert(string + " is not equal to " + prompted);
}

// Question 6
function echo(name) {
    console.log(name);
}

// Question 7
function print() {
    console.log(string + " " + prompted)
}

// Question 8
function open_door(door) {
    switch(door){
        case 1:
            alert("YOU WON A BRAND NEW CAR!");
            break;
        case 2:
            alert("YOU WON $1,000,000!");
            break;
        case 3:
            alert("YOU WON A FREE VACATION TO HAWAII!");
            break;
        default:
            alert("That isn't a valid door number, pick a number 1-3")
            break;
    }
}