import React from "react"
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function HtmlEditor(parameters){
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
                HTML
            </div>
            <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className="htmleditor1"
            options={{
                lineWrapping:true,
                lint:true,
                mode: language,
                theme: 'material'
            }}
            />
        </div> 
    )
}
