import React from 'react'

export default function TempInput(props){
    let placeholder= `Temperature in ${props.data.name}:`
    let temp = props.data.converter(props.data.name)
    return(
            <div className="form-group">
                <label>{placeholder}</label>
                <input type="number" className="form-control" value={temp} onChange={props.data.handleChange} name={props.data.name} placeholder=''></input>
                
                
            </div>
        )
}