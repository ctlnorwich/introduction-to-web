export const normalFlow = {
  html: `
<!DOCTYPE html>
<html>

<head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="/styles.css" />
</head>

<body style="padding: 0 0 2rem 0;">
    <h1>This page is laid out in normal flow.</h1>

    <ul>
        <li>In normal flow, the inline layout direction is the same as the writing direction of the language the page is in.</p> 
        <li>The block direction runs perpendicular to this.</p>
        <li>Depending the writing mode and text direction settings, the page will look different:</p>
    </ul>

    <p>In English, the inline direction will run <br> horizontally left to right, and the <br> block direction will be vertical.</p>
    <p style="writing-mode: vertical-rl;">日本語のよ な言語では、<br>インライン方向は垂直になり、 <br>ブロックは水平に実行されます</p>
    <p style="direction: rtl;">في اللغة العربية، يكون اتجا <br> الكتابة من اليمين إلى اليسار.</p>
</body>
</html>
`}

export const addingFlex = {
  html: `
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Flexbox 1</title>

    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
        <h1>Flexbox Example</h1>
    </header>

    <section>
        <article>
            <h2>First article</h2>

            <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
        </article>

        <article>
            <h2>Second article</h2>

            <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
        </article>

        <article>
            <h2>Third article</h2>

            <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
            <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
        </article>
    </section>
  </body>
</html>
`, 
css: `
html {
    font-family: sans-serif;
    font-size: 12px;
}

body {
    margin: 0;
}

header {
    background: #d2553b;
    height: 100px;
}

h1 {
    text-align: center;
    color: white;
    line-height: 100px;
    margin: 0;
}

p, h2 {
    color:antiquewhite;
}

article {
    padding: 10px;
    margin: 10px;
    background: #25236e;
}

/* Add your flexbox CSS below here */
      
/* Add in flexible sizing rules here */
`}

export const flexFlow = {
  html: `
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Flexbox 2</title>

    <link rel="stylesheet" href="style.css">
  </head>
  <body>
   <header>
      <h1>Flexbox Example 2</h1>
    </header>

    <section>
      <article>
        <h2>Article 1</h2>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

      <article>
        <h2>Article 2</h2>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

      <article>
        <h2>Article 3</h2>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

      <article>
        <h2>Article 4</h2>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

      <article>
        <h2>Article 5</h2>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

      <article>
        <h2>Article 6</h2>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

      <article>
        <h2>Article 7</h2>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

      <article>
        <h2>Article 8</h2>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

    </section>
    </body>
</html>
`, 
css : `
html {
    font-family: sans-serif;
    font-size: 12px;
}

body {
    margin: 0;
}

header {
    background: #d2553b;
    height: 100px;
}

h1 {
    text-align: center;
    color: white;
    line-height: 100px;
    margin: 0;
}

p, h2 {
    color:antiquewhite;
}

article {
    padding: 10px;
    margin: 10px;
    background: #25236e;
}

section {
    display: flex;
}
`}

export const flexSizing = {
  html: `
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Flexbox 1</title>

    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>Flexbox Example</h1>
    </header>

    <section>
      <article>
        <h2>First article</h2>

        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

      <article>
        <h2>Second article</h2>

        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
      </article>

      <article>
        <h2>Third article</h2>

        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
        <p>I wanna be the very best like no-one ever was to catch them is my real test to train them is my cause I will travel across the land searching far and wide each pokemon to understand the power that's inside.</p>
        </article>
    </section>
  </body>
</html>
`,
css : 
`
html {
    font-family: sans-serif;
    font-size: 12px;
}

body {
   margin: 0;
}

header {
    background: #d2553b;
    height: 100px;
}

h1 {
    text-align: center;
    color: white;
    line-height: 100px;
    margin: 0;
}

p, h2 {
    color:antiquewhite;
}

section {
    display: flex;
}

article {
    padding: 10px;
    margin: 10px;
    background: #25236e;
}
`
}

export const flexAlignment = {
  html: `
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Flexbox 1</title>

    <link rel="stylesheet" href="style.css">
  </head>
  <body>
   <header>
        <h1>Flexbox Alignment Example</h1>
    </header>

    <section>

        <article>
            <h2>Article One</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Two</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Three</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Four</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Five</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Six</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Seven</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Eight</h2>
            <p>Article preview text here!</p>
        </article>

    </section>
  </body>
</html>
`,
css: `
html {
    font-family: sans-serif;
    font-size: 12px;
}

body {
    margin: 0;
}

header {
    background: #c68f84;
    height: 100px;
}

h1 {
    text-align: center;
    color: white;
    line-height: 100px;
    margin: 0;
}

article {
    height:100px;
    border-radius: 5px;
    padding: 20px;
    background-color: rgb(153, 200, 203);
    border: 2px solid rgb(58, 103, 103);
}

section {
    padding-top: 30px;
    height: 500px;
    display: flex;
    flex-flow: row wrap;
}
`}

export const addingGrid = {
  html: `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Grid 1</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <h1>CSS Grid Practical Example</h1>

    <section class="container">

        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
        <div>Six</div>
        <div>Seven</div>

    </div>

  </body>

</html>
`,
css: `
html {
    font-size: 12px;
}

body {
    margin: 0 auto;
    max-width: 520px;
    font: .9em/1.2 Arial, Helvetica, sans-serif;
    color: rgb(58,103,103);
}

.container > div {
    border-radius: 5px;
    padding: 8px;
    background-color: rgb(153, 200, 203);
    border: 2px solid rgb(58, 103, 103);
}

.container {
/* Add CSS Grid properties here */
}
`}

export const lineBasedPlacement = {
  html: `
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Grid 2</title>
    <link rel="stylesheet" href="style.css">
  </head>

<body>

    <div class="container">
        <header>
            <h1>Latest Blog Posts</h1>
        </header>
        <article>
            <h2>Article Title</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Title</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Title</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Title</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Title</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Title</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Title</h2>
            <p>Article preview text here!</p>
        </article>
        <article>
            <h2>Article Title</h2>
            <p>Article preview text here!</p>
        </article>

    </div>

</body>

</html>
`,
css: `
html {
    font-size: 12px;
}
body {
    width: 90%;
    max-width: 900px;
    margin: 2em auto;
    font: .9em/1.2 Arial, Helvetica, sans-serif;
    color: rgb(58,103,103);
}

.container > article {
    border-radius: 5px;
    padding: 10px;
    background-color: rgb(153, 200, 203);
    border: 2px solid rgb(58, 103, 103);
}

.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    grid-auto-rows: minmax(100px, auto);
}

/* Adding in a new header selector */
header {
    border-radius: 5px;
    padding: 10px;
    background-color: rgb(221, 225, 225);
    border: 2px solid rgb(58, 103, 103);
    text-align: center;
    /* Adding in our header website placement, spanning the entire first row of our grid */
}
`}

export const gridColumn = {
  html: `
<!DOCTYPE html>
<html lang="en-GB">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Grid 2</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>

    <div class="container">

      <header>
          <h1>Latest Blog Posts</h1>
      </header>
      <article class = "bigBox">
          <h2>Article Title</h2>
          <p>Article preview text here!</p>
      </article>
      <article>
          <h2>Article Title</h2>
          <p>Article preview text here!</p>
      </article>
      <article>
          <h2>Article Title</h2>
          <p>Article preview text here!</p>
      </article>
      <article>
          <h2>Article Title</h2>
          <p>Article preview text here!</p>
      </article>
      <article>
          <h2>Article Title</h2>
          <p>Article preview text here!</p>
      </article>
      <article>
          <h2>Article Title</h2>
          <p>Article preview text here!</p>
      </article>
      <article>
          <h2>Article Title</h2>
          <p>Article preview text here!</p>
      </article>
      <article>
          <h2>Article Title</h2>
          <p>Article preview text here!</p>
      </article>

   </div>

</body>

</html>
`,
css: `
body {
    width: 90%;
    max-width: 900px;
    margin: 2em auto;
    font: .9em/1.2 Arial, Helvetica, sans-serif;
    color: rgb(58,103,103);
}

.container > article {
    border-radius: 5px;
    padding: 10px;
    background-color: rgb(153, 200, 203);
    border: 2px solid rgb(58, 103, 103);

}

.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    grid-auto-rows: minmax(100px, auto);
}

/* Adding in a new header selector */
header {
    border-radius: 5px;
    padding: 10px;
    background-color: rgb(221, 225, 225);
    border: 2px solid rgb(58, 103, 103);
    text-align: center;
    /* Adding in our header website placement, spanning the entire first row of our grid */
    grid-column: 1/5;
    grid-row: 1;
}

.bigBox{
    grid-column: 1 / 2;
    grid-row: 2 / 5;
}
`}


export const gridTemplateAreas = {
    html: `
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Grid 2</title>
    <link rel="stylesheet" href="style.css">
  </head>

<body>

  <div class ="container">
    <header>
        <h1>Latest Blog Posts</h1>
    </header>

    <section class = "bigBox">
        <h2>Section Title</h2>
        <p>Section Text Here!</p>
    </section>

    <!-- New Section containing subgrid starts here-->
    <section class="articleGrid">
      <article>
        <h2>Article One</h2>
        <p>Article preview text here!</p>
      </article>
      <article>
        <h2>Article Two</h2>
        <p>Article preview text here!</p>
      </article>
      <article>
        <h2>Article Three</h2>
        <p>Article preview text here!</p>
      </article>
      <article>
        <h2>Article Four</h2>
        <p>Article preview text here!</p>
      </article>
      <article>
        <h2>Article Five</h2>
        <p>Article preview text here!</p>
      </article>
      <article>
        <h2>Article Six</h2>
        <p>Article preview text here!</p>
      </article>
      <article>
        <h2>Article Seven</h2>
        <p>Article preview text here!</p>
      </article>
    </section>
    <!-- New section containing subgrid ends here-->
    
    <footer>
        <h2>Footer</h2>
    </footer>

    </div>

  </body>

</html>`,
    css : `
html {
  font-size: 12px
} 
body {
    width: 90%;
    max-width: 900px;
    margin: 2em auto;
    font: .9em/1.2 Arial, Helvetica, sans-serif;
    color: rgb(58,103,103);
}

.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    grid-auto-rows: minmax(100px, auto);
    grid-template-areas: 
    "header header header header"
    "bigBox content content content"
    "bigBox content content content"
    "footer footer footer footer";
}

/* changed the class indicator here to show that 
<articles> are now following the .articleGrid subclass. */
.articleGrid > article {
    border-radius: 5px;
    padding: 10px;
    background-color: rgb(153, 200, 203);
    border: 2px solid rgb(58, 103, 103);
    
}

/* Created new class for subgrid within <section> element */
.articleGrid {
    grid-area: content;
    display: grid;
    grid-template-columns: subgrid;
    grid-auto-rows: minmax(100px,150px);
    gap: inherit;
    
}

header {
    border-radius: 5px;
    padding: 10px;
    background-color: rgb(221, 225, 225);
    border: 2px solid rgb(58, 103, 103);
    text-align: center;
    grid-area: header;

}

.bigBox{
    grid-area: bigBox;
    border-radius: 5px;
    padding: 10px;
    border: 2px solid rgb(58, 103, 103);
}

footer {
    border-radius: 5px;
    padding: 10px;
    background-color: rgb(221, 225, 225);
    border: 2px solid rgb(58, 103, 103);
    text-align: center;
    grid-area: footer;
}
`
}