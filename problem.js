/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

/*JAMILLE'S CODE!*/

//function

function passwordCheck(userInput, userPass) {
  // checks for length
  if (userPass.length < 5) {
    console.log("Your password is too short!");
    return;
  }
  //checks input forgot
  else if (userInput === "forgot") {
    console.log("Here is a hint");
    console.log(
      "This password you set should not be used because it glitches the system"
    );

    //checks input reset
  } else if (userInput === "reset") {
    console.log("Let's reset your account");
    console.log(
      "This password you set should not be used because it glitches the system"
    );

    //checks for normal granted access
  } else if (userInput === userPass) {
    console.log("Access Granted!");

    //checks for no granted access
  } else {
    console.log("Access Denied!");
  }
}

/*FUNCTION CALLING TIME!*/
//problem 1
passwordCheck("MLPlover123", "MLPlover123"); // Access Granted!

//problem 2
passwordCheck("MLPhater123", "MLPlover123"); // Access Denied!

//problem 3
passwordCheck("forgot", "MLPlover123"); // Here is a hint + The password you set should not be used because it glitches the system

//problem 4
passwordCheck("reset", "MLPlover123"); // Lets reset your account + "This password you set should not be used because it glitches the system

//problem 5
passwordCheck("smol", "smol"); // Your password is too short
