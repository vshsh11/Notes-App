import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const Title=(props)=>{
    const [input,setinput] = useState({
        title:"",
        content:""
    });
    const change = (event)=>{
        const {name,value} = event.target;
        setinput((preval) =>{
            return {...preval,
            [name] : value,
            }
        }) 
    }
    const add = ()=>{
        props.predata(input);
        setinput({
            title:"",
            content:""
        });
    }
    return(
<>
<div className="main_note">
    <form>
        <input type="text" placeholder="Title" onChange={change} value={input.title} name="title" autoComplete="off"></input>
        <textarea rows="" column="" placeholder="Write a note..." onChange={change} value={input.content} name="content"></textarea>
<Button onClick={add}><AddIcon className="plus_sign"/></Button>
    </form>
</div>
</>

    );

}

export default Title;