import { useState } from "react";

const MyButton =()=>{
    const [count, setCount] = useState(0);

    const handleClick =()=>{
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick} className="p-4 m-4 border cursor-pointer">
            Clicked {count} times
        </button>
    )
}

const Counter =()=>{
    return (
        <div>
        <div>Counter that Update Seperately</div>
        <MyButton />
        <MyButton />
        </div>
    )
}

export default Counter;