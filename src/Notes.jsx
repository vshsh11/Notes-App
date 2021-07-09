import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Notes=(props)=>{
const click =()=>{
    props.deleteitem(props.id);
}
    return(
        <>
<div className="note">
    <h1>{props.title}</h1>
    <br/>
    <p>{props.content}</p>
    <button className="btn" onClick={click}>
<DeleteOutlineIcon className="delete"/>
</button>
</div>

        </>
    );

}

export default Notes;