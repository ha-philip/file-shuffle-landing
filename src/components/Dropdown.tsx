import React from 'react';
export default function Dropdown(menu: {menu: number}) {
    return(
        <>
        <div className='드롭다운-1'>
            <img src='https://www.iobit.com/tpl/images/product-icons/asc_96.png' alt='' width={"160px"} onClick={()=> window.open("https://file-shuffler.netlify.app/", "_blank")}/>
            <img src='https://www.iobit.com/tpl/images/product-icons/asc_96.png' alt='' width={"160px"} onClick={()=> window.open("https://file-shuffler.netlify.app/", "_blank")}/>
        </div>
        </>
    );
}