const html3 = {
    html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Inline Examples</title>
  </head>

  <body>
    <!-- Here's an inline style -->
    <h1 style="color:purple;">This is a purple heading</h1>
       
    <!-- Here's an inline script on a button element -->
    <button onclick="alert('Alert JavaScript!);">Click me to alert!</button>

    <button id="alertButton">Click me to log to the console!</button>

    <!-- Here's an inline script within the body -->
    <script>
      const alertButton = 
      document.querySelector("#alertButton");
      alertButton.addEventListener("click", (e) => {
        console.log('Logged to the console!');
      });
    </script>

  </body>
</html>
`
}

export default html3;