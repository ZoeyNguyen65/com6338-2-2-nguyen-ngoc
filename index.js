function greet() {

username = prompt("What is your name?");
if (username === null || username.trim() === "") return;// To exit the function if user chooses "Cancel" or leave the space blank

alert("Hello, " + username);

age = parseInt(prompt("How old are you?"));
if (isNaN(age)) return;

hadABirthday = confirm("Have you had a birthday yet this year? Click OK for Yes, Cancel for No");

currentYear = new Date().getFullYear();

if (hadABirthday) {
    birthYear = currentYear - age;
    } 
    else {
    birthYear = currentYear - age - 1;
    }

alert("You were born in " + birthYear);
}