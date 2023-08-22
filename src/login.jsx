import { useEffect, useLayoutEffect, useRef, useState } from "react";
const Login = () =>{
    const [loginhidden, setLoginhidden] = useState(false);
    const [background, setBackground] = useState('#ffffff');
    useEffect(() =>{
        console.log("a");
    }, [loginhidden])
    const out = () =>{
        if (loginhidden){
            setLoginhidden(false);
            document.body.style.backgroundColor = "#ffffff";
        }
        else{
            setLoginhidden(true);
            out1();
            document.body.style.backgroundColor = background;
        }
    }
    const out1 = () =>{
        let color = "#";
        let letter = "0123456789abcdef";
        for (let i = 0; i < 6; i++){
            color+= letter[Math.floor(Math.random()*16)];
        }
        setBackground(color);
    }
    return (
        <div>
        {!loginhidden && <button onClick = {out}>Login</button>}
        {loginhidden && <button onClick = {out}>Logout</button>}
        </div>
    )
}
export default Login;