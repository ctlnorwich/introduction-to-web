export const cssSelectors = {
  html: `
    <h1>Make this heading Magenta and give it a Magenta glow using the text-shadow property.</h1>
    <p>Change all typography in the body to the 'Courier New' font.</p>
    <p>Give the body a dark background colour...</p>
    <p>Make all paragraphs Aquamarine!</p>
    <p>Make <a href="https://www.w3.org/">this link</a> a suitable colour using a hex code value.</p>
`,
  css: `
  body {

  }

  h1 {
  
  }

  p {
  
  }

  a {
  
  }
`,
  cssSolution: `
    body {
    font-family: "Courier New", Courier, monospace;
    background: darkslateblue;
  }

  h1 {
    color: magenta;
    text-shadow: 0 0 12px magenta;
  }

  p {
    color: aquamarine;
  }

  a {
    color: #00ffff;
  }
`}

export const pseudoClasses = {
  html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CSS</title>
    <style>
      body { padding: 1rem; background: darkslateblue; }
      a { color: white; font-size: 2rem; text-decoration: none; } 
      a:visited { color: yellow; }
      a:hover { text-decoration: underline; }
      a:active { color: cornflowerblue; }
    </style>
  </head>

  <body>
    <p>
      <a href="#">I'm a link!</a>
    </p>
  </body>
</html>
`}

export const boxModel = {
  html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CSS</title>
    <style>
      .box {
        width: 150px;
        height: 50px;
        margin: 10px;
        padding: 25px;
        border: 5px solid black;
      }
    </style>
  </head>

  <body>
    <div class="box"></div>
  </body>
</html>
`}

export const marginCollapse = {
  html: `
<!DOCTYPE html> 
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CSS</title>
    <style>
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px; 
        background: violet;
        margin: 10px 0;
      }
      section:nth-of-type(2) {
        margin: 30px 0 5px;
      }
      section:nth-of-type(3) {
        margin: 20px 0 50px;
      }
      section:nth-of-type(4) {
        margin: -10px 0 10px;
      }
    </style>
  </head>

  <body>
    <main>
      <section>
         margin: 10px 0;
      </section>
      <section>
        margin: 30px 0 5px;
      </section> 
      <section>
          margin: 20px 0 50px;
      </section>
      <section>
          margin: -10px 0 10px;
      </section>    
    </main
  </body>

</html>
`}

export const objectFit = {
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