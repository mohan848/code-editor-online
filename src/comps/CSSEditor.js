import React from "react"
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as CSSControlledEditor} from 'react-codemirror2'



export default function CSSEditor(parameters){
    const{
        language,
        value,
        onChange
    }=parameters

    function handleChange(editor,data,value){
        onChange(value)
      }
    return (
        <div className="editor">
            <div className="title">
                CSS
            </div>
            <CSSControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className="csseditor1"
            options={{
                lineWrapping:true,
                lint:true,
                mode: language,
                theme: 'material',
                lineNumbers: true
            }}
            />
        </div> 
    )
}
