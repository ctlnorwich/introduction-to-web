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
`
}

export default html4;