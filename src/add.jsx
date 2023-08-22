import { useEffect, useLayoutEffect, useRef, useState } from "react";
const Add = () =>{
    const [box, setBox] = useState([]);
    const ren = useRef(null);
    const out = () =>{
        setBox(prevItems => [...prevItems, ren.current.value]);
    }   
    return (
        <>
        <input type = "text" ref = {ren}/><br/>
        <button onClick ={out}>Add</button>
        <ul>
            {box.map((item, index) =>(
                <li>{item}</li>
            ))}
        </ul>
        </>
    )
}
export default Add;