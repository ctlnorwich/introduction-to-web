const css4 = {
    html : `
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
`
}

export default css4;