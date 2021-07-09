import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import Notes from './Notes';
const App=()=>{
    const [items,setitems] = useState([]);

    const data =(input)=>{
             setitems((old)=>{
                 return [...old,input];
             })
    }
    const del=(id)=>{
        setitems((olds)=>
            olds.filter((val,idx)=>{
                return idx!==id;
            })
        )

    }
return(
    <>
<Header/>
    <Footer/>
    <Title predata={data}/>
    {items.map((val,index)=>{
       return (<Notes 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteitem={del}
        />);})}
    </>
    );

}


export default App;