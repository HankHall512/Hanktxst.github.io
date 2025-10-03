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
var webmaps =
[
  ["Truesizeof", "https://www.thetruesize.com/", "Truesizeof lets you compare the size of countries using the mercator projection's distortions."],
];
document.write(welcome());

function webmap_table()
{   document.write("<table width='100%' border='1'>");

for (var row=0; row < webmaps.length; row++)
  {     document.write("<tr><td>");
    
    let title = "<strong>" + webmaps[row][0] + "</strong><br>";
    let link = "<a href='" + webmaps[row][1] + "' target='_blank'>" + webmaps[row][1] + "</a><br>";
    let description = "<p>" + webmaps[row][2] + "</p>";

    document.write(title + link + description);

    document.write("</td></tr>");
  }

  document.write("</table>");
  return "";
}
