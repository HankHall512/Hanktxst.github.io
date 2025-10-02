/*
window.onload = function() {
  // Prompt the user for their name
  let userName = prompt("Please enter your name:");

  // Update the header with the user's name
  if (userName) {
    document.getElementById("header-greeting").textContent = "Hello, welcome " + userName + "!";
  } else {
    document.getElementById("header-greeting").textContent = "Hello, welcome Guest!";
  }

  // Optional: Add your conditional test button back in
  let button = document.createElement("button");
  button.textContent = "Conditional Test";
  button.onclick = function() {
    let x = confirm("Are you sure you want to proceed?");
    if (x) {
      alert("You chose Okay!");
    } else {
      alert("You chose Cancel!");
    }
  };
  document.body.appendChild(button);
};
*/
function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
    user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
}
document.write(welcome());
function webmap_table()
{   document.write("<table width=100%>");   for (var row=0; row < 2; row++)
  {     document.write("<tr>");     for (var column=0; column < 3; column++)
    {       document.write("<td>" + row + "," + column + "</td>");
    }     document.write("</tr>");
  }   document.write("</table>");   return "";
}
