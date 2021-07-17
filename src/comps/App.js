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

  return(
    <>
    <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </head>
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
        srcDoc={code}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        />
    </div>
    </>
  )
}


export default App;
