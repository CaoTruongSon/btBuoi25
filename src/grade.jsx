import { useEffect, useLayoutEffect, useRef, useState } from "react";
const Grade = () =>{
    const sub = ["Toán", "Vật lí", "Văn học"];
    const [grade, setGrade] = useState({});
    const out = (subject, value) =>{
        if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 10)) {
        setGrade(prevgrade => ({
            ...prevgrade, [subject]: value
        }));
    }
    }
    const out1 = () =>{
        let sum = 0;
        for (let i = 0; i < Object.keys(grade).length; i++){
            const subject = Object.keys(grade)[i];
            sum+= parseInt(grade[subject]);
        }
        return sum;
    }
    return (
        <>
        {sub.map(subject => (
            <div>
                <label>{subject}: </label>
                <input type ="number" 
                min = "0"
                max = "10"
                value={grade[subject] || ''}
                onChange={e => out(subject, e.target.value)}
                />
            </div>
        ))}
        <div>Tổng điểm là: {out1()}</div>
        </>
    )
}
export default Grade;