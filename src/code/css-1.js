const css1 = {
    html : `
    <h1>Make this heading Magenta and give it a Magenta glow using the text-shadow property.</h1>
    <p>Change all typography in the body to the 'Courier New' font.</p>
    <p>Give the body a dark background colour...</p>
    <p>Make all paragraphs Aquamarine!</p>
    <p>Make <a href="https://www.w3.org/">this link</a> a suitable colour using a hex code value.</p>
`,
    css : `
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
`
}

export default css1;