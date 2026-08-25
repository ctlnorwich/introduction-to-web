export const consoleExamples = {
    html: `
<h1><span style="font-size: 3rem;">🚧</span> Nothing to see here!</h1>

<p>The JS we're using here isn't changing the html. Instead, we're logging to the console below. Change the code in <code>index.js</code> and hit run to update.</p>
`,
    js:
        `let taskName = "Learn HTML"; 
taskName = "Learn JavaScript"; 
taskName = null;

// You'll want to get used to using the console to test your JS:
console.error("this is a test error!")
console.warn("this is a test warning!")

// Mostly, you'll be using console.log:
console.log(taskName);
`
}

export const variableConst = {
    html: `
<h1><span style="font-size: 3rem;">🚧</span> Nothing to see here!</h1>
    <p>The JS we're using here isn't changing the html. Instead, we're logging to the console below. Change the code in <code>index.js</code> and hit run to update.</p>
`,
    js:
        `
const MY_NOT_SO_SECRET_API_KEY = "123456789XYZ";
const taskList = ["Learn Git", "Learn HTML", "Learn CSS" ]; 
taskList.push("Learn JavaScript");

console.log(taskList);
`
}

export const variablesLet = {
    html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First HTML Page</title>
    <script src="index.js" defer></script>
  </head>

  <body>
    <h1><span style="font-size: 3rem;">🚧</span> Nothing to see here!</h1>
    <p>The JS we're using here isn't changing the html. Instead, we're logging to the console below. Change the code in <code>index.js</code> and hit run to update.</p>
  </body>
</html>
`,
    js: `
let myInt = 7;
let myNumber = "7";
myNumber = Number(myNumber) + 5;

console.log(myNumber);
`}

export const quickPractical = {
    html: `
<h1><span style="font-size: 3rem;">⚠️</span> Hello Placeholder!</h1>
<p>The H1 above is being queried by our JS so we can update its inner HTML. We should see something change!</p>
    `,
    js: `
    // Let's go!

if (typeof myName !== 'undefined') {
    document.querySelector("h1")
    .innerHTML = \`⚠️ Hello \${myName}!\`;
}`
}

export const ifElse = {
    html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pizza 1</title>
    <script src="index.js" defer></script>
  </head>

  <body>
    <h1><span style="font-size: 3rem;">🚧</span> Nothing to see here!</h1>
    <p>The JS we're using here isn't changing the html. Instead, we're logging to the console below. Change the code in <code>index.js</code> and hit run to update.</p>
  </body>
</html>
`,
    js: `
let ticketsAvailable = false;

if (ticketsAvailable) {
    /* code to run if condition is true */
    console.log("Tickets available!");
} else {
    /* run some other code instead */
    console.log("Sold out!"); 
};
`}

export const elseIf = {
    html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First HTML Page</title>
    <script src="index.js" defer></script>
  </head>

  <body>
    <select name="pizzas">
      <option value="" disabled selected>Please select a pizza</option>
      <option value="Napoli">Napoli</option>
      <option value="Margherita">Margherita</option>
      <option value="Roma">Roma</option>
    </select>
    <h1><span style="font-size: 3rem;">🍕</span> <span class="pizzaName">Please select a pizza</span></h1>
    <p>...</p>
    <p>£<span class="pizzaPrice">0</span></p>
  </body>

</html>
`,
    js: `
// Initialise const variables with html elements.
const pizzaName = document.querySelector("h1 .pizzaName");
const pizzaToppings = document.querySelector("p");
const pizzaPrice = document.querySelector(".pizzaPrice");
const pizzaSelect = document.querySelector("select");

// Define current pizza variable but don't initialise it yet...
let currentPizza;

// Add a change event listener to the pizza select element.
pizzaSelect.addEventListener("change", (e)=> {
    currentPizza = e.target.value;
    pizzaName.innerHTML = currentPizza;
    console.log(\`changed to \${currentPizza}\`);

    if (currentPizza === "Napoli") {
        pizzaToppings.innerHTML = "Tomato sauce, extra virgin olive oil, fresh garlic, basil & oregano (NO CHEESE)";
        pizzaPrice.innerHTML = "14.99"
    } else if (currentPizza === "Margherita") {
        pizzaToppings.innerHTML = "Tomato sauce, extra virgin olive oil, mozzarella, basil & Parmigiano Reggiano";
        pizzaPrice.innerHTML = "12.99"
    } else if (currentPizza === "Roma") {
        pizzaToppings.innerHTML = "Tomato sauce, extra virgin olive oil, buffalo mozzarella D.O.P & basil";
        pizzaPrice.innerHTML = "13.99"
    } else {
        pizzaToppings.innerHTML = "...";
        pizzaPrice.innerHTML = "0"
    };
})
`}

export const logicalOperators = {
    html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First HTML Page</title>
    <script src="index.js" defer></script>
  </head>

  <body>
    <p>
    <label>
    Weather
    <select name="weather">
      <option value="" disabled selected>Select weather</option>
      <option value="raining">Raining</option>
      <option value="snowing">Snowing</option>
      <option value="sunny">Sunny</option>
    </select>
    </label>
    </p>

  <p> 
    <label>
    Wind speed (mph)
    <input type="number" name="wind" min="5" max="100" value="10" step="5" />
    </label>
  </p>

  <p>
     <span style="font-size: 3rem;">🧺</span> <button>Do I put my washing out?</button>
  </p>
    <p class="advice">...</p>
  </body>

</html>
`,
    js: `
// Initialise const variables with html elements.
const weatherType = document.querySelector("h1");
const weatherAdvice = document.querySelector("p.advice");
const button = document.querySelector("button");

// Define current weather variable but don't initialise it yet...
let currentWeather;
let wind;

// Add a change event listener to the weather select element.
button.addEventListener("click", (e) => {

    const currentWeather =  document.querySelector("select").value;
    const windSpeed = Number(document.querySelector("input").value);

    if (currentWeather === "raining" || currentWeather === "snowing") {
        weatherAdvice.innerHTML = "The <strong>weather is bad</strong>. Best not put out any washing.";
    }
    else if (!(windSpeed < 40)) {
        weatherAdvice.innerHTML = "It's <strong>very windy</strong>! Your washing might blow away.";
    }
    else if (currentWeather === "sunny" && windSpeed >= 25) {
        weatherAdvice.innerHTML = "<strong>Sun and a breeze</strong>! Perfect day for drying washing.";
    } 
    else {
        weatherAdvice.innerHTML = "It's <strong>dry</strong> outside! Time to put outthe washing.";
    };
})
`}

export const switchStatements = {
    html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First HTML Page</title>
    <script src="index.js" defer></script>
  </head>

  <body>
    <select name="day">
      <option value="" disabled selected>Please select a day</option>
      <option value="mon">Monday</option>
      <option value="tue">Tuesday</option>
      <option value="wed">Wednesday</option>
      <option value="thu">Thursday</option>
      <option value="fri">Friday</option>
      <option value="sat">Saturday</option> 
      <option value="sun">Sunday</option> 
    </select>
    <h1> <span style="font-size: 3rem;">🗓️</span> <span class="day">Please select a day</span></h1>
    <p>...</p>
  </body>

</html>
`,
    js: `
// Initialise const variables with html elements.
const dayHeading = document.querySelector("h1 .day");
const daySelect = document.querySelector("select");
const dayMenu = document.querySelector("p");

// Define current day variable but don't initialise it yet...
let currentDay;

// Add a change event listener to the day select element.
daySelect.addEventListener("change", (e)=> {

    currentDay = e.target.value;
    dayHeading.innerHTML = document.querySelector(\`option[value="\${e.target.value}"]\`).innerHTML;
    console.log(\`changed to \${currentDay}\`);

    switch(currentDay) {

      case "mon":
      case "fri":
        dayMenu.innerHTML = "Chilli";
      break;

      case "tue":
        dayMenu.innerHTML = "Halloumi";
      break

      case "wed":
        dayMenu.innerHTML = "Lasagne";
      break;

      case "thu":
        dayMenu.innerHTML = "Burger";
      break;

      default:

        dayMenu.innerHTML = "Cafeteria Closed!";
    }
})
`}

export const dataAttributeConditionals = {
    html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First HTML Page</title>
    <script src="index.js" defer></script>
  </head>

  <body>
    <select name="day">
      <option value="" disabled selected>Please select a day</option>
      <option data-menu="Chilli" value="mon">Monday</option>
      <option data-menu="Halloumi" value="tue">Tuesday</option>
      <option data-menu="Lasagne" value="wed">Wed</option>
      <option data-menu="Burger" value="thu">Thursday</option>
      <option data-menu="Chilli" value="fri">Friday</option>
      <option data-menu="Cafeteria Closed" value="sat">Saturday</option> 
      <option data-menu="Cafeteria Closed" value="sun">Sunday</option> 
    </select>
    <h1><span style="font-size: 3rem;">🗓️</span> <span class="day">Please select a day</span></h1>
    <p>...</p>
  </body>

</html>
`,
    js: `
// Initialise const variables with html elements.
const dayHeading = document.querySelector("h1 .day");
const daySelect = document.querySelector("select");
const dayMenu = document.querySelector("p");

// Define current day variable but don't initialise it yet...
let currentDay;

// Add a change event listener to the day select element.
daySelect.addEventListener("change", (e)=> {

    currentDay = e.target.value;
    dayHeading.innerHTML = document.querySelector(\`option[value="\${currentDay}"]\`).innerHTML;
    dayMenu.innerHTML = document.querySelector(\`option[value="\${currentDay}"]\`).getAttribute("data-menu");
    console.log(\`changed to \${currentDay}\`);

})
`}

export const invokingFunctions = {
    html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First HTML Page</title>
    <script src="index.js" defer></script>
  </head>

  <body>
    <div style="font-size: 3rem;">🧮</div>
  </body>

</html>
`,
    js: `
/* invoking a declared function*/
function quickMathsD (a, b) { 
    return a * b;
};

const answerD = quickMathsD(5, 8);

/* A function expression - an anonymous function is stored in a variable */
const quickMathsE = function (a, b){
    return a * b
};

const answerE = quickMathsE(5, 8);

// ToDo: You need to console.log to see these answers!
`}

export const moodEmojiChallenge = {
    html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Emoji Challenge!</title>
  </head>

  <body>
    <input type=range name="mood" min="1" max="4" value="2"></input>

    <p>how do you rate this content?</p>
    <div style="font-size: 3rem; margin-top: 0;">
      <span>🙁</span>
      <span>😐</span>
      <span>🙂</span>
      <span>😀</span>
    </h1>

  </body>

</html>
`,
    js: `
// Emoji Challenge

// Here's a hint about changing styles:
document.querySelector("span:nth-of-type(2)").style.border = "solid red 2px";
`,
    jsSolution: `
    // Example using span:nth-of-type() to find the active emoji
const moodEmojis = document.querySelectorAll("div span");
const moodSelect = document.querySelector("input");

// Function can pass in the number from the range slider
const updateEmojis = (number) => {
    moodEmojis.forEach((emoji) => emoji.style.display = 'none');
    document.querySelector(\`div > span:nth-of-type(\${number})\`).style.display = 'block';
}

// Default to emoji 2
updateEmojis(2)

// When the range slider changes, call the update function and pass in the new number
moodSelect.addEventListener("change", (e)=> {
    updateEmojis(e.target.value)
})
`}