import React,{useEffect, useState} from "react"
import HtmlEditor from "./HtmlEditor";
import CSSEditor from "./CSSEditor"
import JSEditor from "./JSEditor"
function App() {
  const[html,enableHTML]=useState('')
  const[css,enableCSS]=useState('')
  const[js,enableJAVA]=useState('')
  const[code,generate_output]=useState('')

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      generate_output(`<html><body>${html}</body>
      <style>${css}</style><script>${js}</script></html>`
      )
    }, 500)
    return ()=>clearTimeout(timeout)
  },[html,css,js])

  function showMain(){
    document.getElementById('main').style.animation = 'fading 2s infinite'
    document.getElementById('main').style.display="block";
    document.getElementById('overlay').style.display="none";

  }

  return(
    <>
    <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </head>
  <body>
  <div id="overlay">
  <div class="jumbotron jumbotron-fluid bg-dark">
  <div class="jumbotron-background">
  <img src="https://img.freepik.com/free-vector/programming-code-coding-hacker-background-programming-code-icon-made-with-binary-code_127544-815.jpg?size=626&ext=jpg" class="blur_image" alt=""/>
  </div>
  <div class="container text-white">
    <h2 class="lead1">Code Editor</h2>
    <p class="lead1">Hassle free coding ! three different sections for HTML , CSS and Javascript to differentiate the code easily and work on it.</p>
    <hr class="my-4"/>
    <p class="lead1">One stop editor for desiging authentic front end websites with ease!</p>
    <button class="btn btn-primary btn-lg" onClick={()=>showMain()}>Start Coding !</button>
  </div>

  </div>
  </div>  
    <div id="main">
    <div className="upper_div">
      <HtmlEditor
      language="xml"
      value={html}
      onChange={enableHTML}/>
      <CSSEditor
      language="css"
      value={css}
      onChange={enableCSS} />

      <JSEditor
      language="javascript"
      value={js}
      onChange={enableJAVA} />
   
    </div>
    <div className="lower_div">
      <iframe
        class="responsive-iframe"
        srcDoc={code}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        />
    </div>
    </div>
    </body>
    </>
  )
}
export default App;
