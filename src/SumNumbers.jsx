import { useEffect, useLayoutEffect, useRef, useState } from "react";

const SumOfEvenNumbers = () => {
    const [number, setNumber] = useState(0);
    const [sum, setSum] = useState(0);
    useEffect(() => {
        let summ = 0;
        for (let i = 0; i <= number; i++){
            summ += i;
        }
        setSum(summ);
    }, [number]);
    return (
        <>
        <div>Hãy nhập giá trị:</div>
        <input type = "number" value = {number} onChange = {(e) => setNumber(e.target.value)} placeholder = "Nhập..."/><br/>
        <div>Tổng từ 1 tới giá trị vừa nhập là:</div>
        {sum}
        </>
    )
}
export default SumOfEvenNumbers;