const html4 = {
    html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Common HTML Tags</title>
  </head>
  <body>
    <!-- Forms are wrapped in the Form tag. This tag has an action and methods attributes to control what the form does when you submit it.-->
    <form action="#" method="get">
    <p>
      <label>
        Text input<br/>
        <input type="text" placeholder="Enter your name">
      </label>
    </p>
    
    <p>
      <label>
        Email input<br/>
        <input type="email" placeholder="your.email@example.com">
      </label>
    </p>
    
    <p>
      <label>
        Password input<br/>
        <input type="password" placeholder="Enter password">
      </label>
    </p>
    
    <p>
      <label>
        Number input<br/>
        <input type="number" placeholder="Enter a number" min="0" max="100">
      </label>
    </p>
    
    <p>
      <label>
        Date input<br/>
        <input type="date">
      </label>
    </p>
    
    <p>
      <label>
        Textarea<br/>
        <textarea rows="4" cols="30" placeholder="Enter multiple lines of text"></textarea>
      </label>
    </p>
    
    <p>
      Select dropdown<br/>
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </p>
    
    <p>
      <label>
        <input type="checkbox">
        Checkbox option
      </label>
    </p>
    
    <p>
      Radio buttons<br/>
      <label>
        <input type="radio" name="choice" value="option1">
        Option 1
      </label>
      <label>
        <input type="radio" name="choice" value="option2">
        Option 2
      </label>
    </p>
    
    <p>
      <label>
        File upload<br/>
        <input type="file">
      </label>
    </p>
    
    <p>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </p>
      </form>

  </body>
</html>
`
}

export default html4;