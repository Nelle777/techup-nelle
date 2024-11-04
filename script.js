// To insert comment, can also use /* and */
var age = 20
age = 65

var username = "preshant"
var password = "techup"

// Print
var isMale = true
var isLoggedIn = false

// Print quotations
var blog_posts = ["Today was a good day", "The sky is blue", "It's raining heavily now"]

console.log(age)
console.log(username)
console.log(password)
console.log(isMale)
console.log(isLoggedIn)
console.log(blog_posts)

if (isMale == true) {
    console.log("You are male"
    )
}
// if (isMale = false) instead ---> nothing will be printed

// if (isMale = false) instead ---> print "you are not male"
if (isMale == true) {
    console.log("You are male")
} else (
    console.log("you are not male")
)

// Loops
// Add 1 to age until age is just before 70
while (age < 70) {
    console.log("Your age is " + age );
    age = age + 1;
}

function sayHello() {
    alert("Hello everyone");
}

function showAge() {

    // Get the value from the input field of ID #user-input
    // Store this value in a variable called user_input
    var user_input = document.getElementById("user-input").value

    // Update the content for the HTML element with ID #header-age with 
    // whatever the user_input varible contains
    document.getElementById("header-age").textContent = user_input
}
