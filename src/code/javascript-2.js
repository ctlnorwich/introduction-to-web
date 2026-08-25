export const sandboxModify = {
  html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First HTML Page</title>
    <script src="index.js" defer></script>
    <style>
      code {
        background: blue;
      }
    </style>
  </head>

  <body>
    <h1><span style="font-size: 3rem;">🚧</span> Nothing to see here!</h1>
    <p>The JS we're using here isn't changing the html. Instead, we're logging to the console below. Remove the <code>//</code> to uncomment the console.logs in <code>index.js</code> and hit run to update.</p>
  </body>
</html>`,
  js: `
/* Access */
const dairyProductsA = ["Milk", "Cream", "Cheese", "Ice Cream", "Yoghurt", "Butter", "Chocolate"];
// console.log(dairyProductsA[2]);
/* returns "Cheese" */

/* Modify */
const dairyProductsB = ["Milk", "Cream", "Cheese", "Ice Cream", "Yoghurt", "Butter", "Chocolate"];
dairyProductsB[1] = "Custard";
// console.log(dairyProducts);
/* returns ["Milk", "Custard", "Cheese", "Ice Cream", "Yoghurt", "Butter", "Chocolate"] */

/* Access Mulitdimensional */
const dairyProductsC = ["Milk", "Cream", ["Cheese", "Ice Cream", "Yoghurt", "Butter", "Chocolate"]];
// console.log(dairyProductsC[2][1]);
/* returns "Ice Cream" */

/* Use indexOf */
const dairyProductsD = ["Milk", "Cream", "Cheese", "Ice Cream", "Yoghurt", "Butter", "Chocolate"];
// console.log(dairyProductsD.indexOf("Butter"));
/* returns 5 */
// console.log(dairyProductsD.indexOf("Potato"));
/* returns -1 */
`
}

export const sandboxAdd = {
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
    <p>The JS we're using here isn't changing the html. Instead, we're logging to the console below. Remove the <code>//</code> to uncomment the console.logs in <code>index.js</code> and hit run to update.</p>
  </body>
</html>
`,
  js:
    `
/* push() */
const techniciansA = ["Hannah", "Tracey", "Andy"]
techniciansA.push("Will");
// console.log(techniciansA);
/* returns ["Hannah", "Tracey", "Andy", "Will"] */

/* unshift() */
const techniciansB = ["Hannah-Louise", "Catherine", "Will"]
techniciansB.unshift("Bevis");
// console.log(techniciansB);
/* returns  ["Bevis", "Hannah-Louise", "Catherine", "Will"] */

/* splice() */
const techniciansC = ["Hannah-Louise", "Bevis", "Will"]
techniciansC.splice( 2, 0, "Catherine", "Andy");
// console.log(techniciansC);
/* returns ["Hannah-Louise", "Bevis", "Catherine", "Andy", "Will"] */
`
}

export const sandboxRemove = {
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
    <p>The JS we're using here isn't changing the html. Instead, we're logging to the console below. Remove the <code>//</code> to uncomment the console.logs in <code>index.js</code> and hit run to update.</p>
  </body>
</html>
`,
  js: `
/* pop() */
const techniciansA = ["Hannah-Louise", "Will", "Catherine", "Bevis"]
techniciansA.pop();
// console.log(techniciansA);
/* returns ["Hannah-Louise", "Will", "Catherine"] */

/* shift() */
const techniciansB = ["Hannah-Louise", "Will", "Catherine", "Bevis"]
techniciansB.shift();
// console.log(techniciansB);
/* returns ["Will", "Catherine", "Bevis"] */

/* splice() */
const techniciansC = ["Hannah-Louise", "Will", "Catherine", "Bevis", "Andy"]
techniciansC.splice(2,2);
// console.log(techniciansC);
/* returns ["Hannah-Louise", "Will", "Andy"] */
`}

export const sandboxMap = {
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
    <p>The JS we're using here isn't changing the html. Instead, we're logging to the console below. Remove the <code>//</code> to uncomment the console.logs in <code>index.js</code> and hit run to update.</p>
  </body>
</html>
`,
  js: `
const technicians = ["Will", "Hannah-Louise", "Hannah", "Bevis", "Catherine", "Tracey", "Andy"];

/* Arrow function to call as a paramater of the hype method */
const hype = (name) => name + "!!!";

const hypeTechnicians = technicians.map(hype);

// console.log(hypeTechnicians);`
}

export const sandboxConvert = {
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
    <p>The JS we're using here isn't changing the html. Instead, we're logging to the console below. Remove the <code>//</code> to uncomment the console.logs in <code>index.js</code> and hit run to update.</p>
  </body>
</html>
`,
  js: `
const dairyProducts = ["Milk", "Cream", "Cheese", "Ice Cream", "Yoghurt", "Butter", "Chocolate"];

const foodItem = dairyProducts[3].toString().toLowerCase();
// console.log(\`For lunch today I'm going to make a \${foodItem} sandwich.\`);
/* returns "For lunch today I'm going to make a cheese sandwich". */

let alphabet = "ABCDEFGH";
const newAlphabet = Array.from(alphabet);
// console.log(newAlphabet);
/* returns ["A", "B", "C", "D", "E", "F", "G", "H"] */
`}