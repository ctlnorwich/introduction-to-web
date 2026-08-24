export const basic = {
  html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My First HTML Page</title>
  </head>

  <body>
    <!-- This is an HTML comment.
    It doesn't appear on the webpage, only in the code itself.
    We will be using these to explain the code. -->
    <h1>This is the first heading on the page.</h1>
    <p>This is a paragraph.</p>
    <p>This is a paragraph with a <a href="https://www.w3.org/">link to the W3C website</a>.</p>
  </body>
</html>
`}

export const headings = {
  html: `
<!DOCTYPE html> 
<html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>My First HTML Page</title>
    </head>
    <body>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Paragraph text.</p>
   </body>
</html>
`}

export const inline = {
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
`}

export const commonElements = {
  html: `
<!DOCTYPE html>

<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Common HTML Tags</title>
  </head>
  <body>
    <!-- Heading tags are examples of a tag which 
    has an opening and a closing tag. 
    Having a separate closing tag usually indicates that 
    content should go between the two tags -->
    <h1>Heading tags! H1</h1>
    <h2>Subheading tags! H2</h2>
    <h3>Sub-subheading tags! H3</h3>

    <p>Good old paragraph tags. You can also use a
    <span style="color:green;">span tag</span> to
    target specific words in CSS or JS.</p>
    <p>Each new paragraph should have a new tag.</p>

    <!-- Use tags that convey semantic meaning
    to highlight specific words and phrases - this indicates why
    you want to format the text in a certain way -->
    <strong>strong text is styled bold by default</strong>
    <em>em text is styled italic by default</em>
    <mark>mark text is highlighted by default</mark>

    <!-- Some tags are self-closing -->
    <!-- They can be written with or without a slash at the end.-->
    <!-- It is more 'modern' to write them without a slash -->

    <!-- Break tags for forced line breaks.
    Don't use these instead of paragraphs!-->
    <p>
    Break tags will <br> create line breaks like this or <br/> this.
    </p>

    <!-- Horizontal rule tags for thematic breaks -->
    <hr> this text is between two horizontal rule tags <hr/>

    <!-- Figure tags are great for grouping an image with a caption -->
    <figure>
    <!-- Image tags - this one has no closing slash ("Modern"!).
    There are a lot of complex ways to add multiple image sizes
    to a single image tag for use on different devices.
    Save that for another workshop! -->
    <img src="https://picsum.photos/id/146/320/240" alt="A red and white tricycle chained to a lamp post on a pavement in front of a door.">
    <figcaption>A caption about this image</figcaption>
    </figure>

    <a href="https://w3c.org">Link tags</a>

    <blockquote>This is a blockquote.
    It is used for quoting sections of text from other sources.
    <cite>Cite tags</cite> can be used within blockquotes.
    </blockquote>

    <ul>
      <li>Unordered list item 1</li>
      <li>Unordered list item 2</li>
      <li>Unordered list item 3</li>
    </ul>

    <ol>
      <li>Ordered list item 1</li>
      <li>Ordered list item 2</li>
      <li>Ordered list item 3</li>
    </ol>

  </body>
</html>
`}

export const forms = {
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
`}