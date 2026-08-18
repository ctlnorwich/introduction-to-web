const css5 = {
  html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CSS</title>
    <style>

    figure {
      margin: 1rem 0;
    }

    figcaption {
      display: block;
      margin: 0.5rem 0 0 0;
    }

    img {
      background: black;
      display: block;
      width: 256px;
    }

    img.fixed {
      height: 256px;
    }

    .contain {
      object-fit: contain;
    }

    .cover {
      object-fit: cover;
    }

    .fill {
      object-fit: fill;
    }
     
    </style>
  </head>

  <body>
    <main>

      <p><strong>Original aspect ratio:</strong></p>

      <figure>
        <img src="https://picsum.photos/id/237/300/200">
        <figcaption>None</figcaption>
      </figure>

      <p><strong>Square 1:1 ratio:</strong></p>

      <figure>
        <img class="fixed contain" src="https://picsum.photos/id/237/300/200">
        <figcaption>Contain</figcaption>
      </figure>

      <figure>
        <img class="fixed cover" src="https://picsum.photos/id/237/300/200">
        <figcaption>Cover</figcaption>
      </figure>

      <figure>
        <img class="fixed fill" src="https://picsum.photos/id/237/300/200">
        <figcaption>Fill</figcaption>
      </figure>
    </main
  </body>

</html>
`}

export default css5;