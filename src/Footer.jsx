import React from 'react';

const Footer=()=>{

    const time = new Date().getFullYear();
    return(
    <>
    <footer>
        <p>Copyright © {time}</p>
        </footer>
    </>
    );
}

export default Footer;