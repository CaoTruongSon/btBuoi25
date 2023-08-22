import { useEffect, useLayoutEffect, useRef, useState } from "react";
const Render = () =>{
    const inputRef = useRef();
    useEffect(() =>{
        // focus để nó tập trung vào input có dấu nháy để nhập lun ko cần ấn vào
        inputRef.current.focus();
    } ,[])
    return (
        <>
        <input ref = {inputRef} type = "text" placeholder = "..."/>
        </>
    )
}
export default Render;