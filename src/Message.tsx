import { useEffect, useState } from "react"

const Message = () => {

    const [number, setNumber] = useState(0)

    
    

    return (
        <>
            <h4>{number}</h4>
            
            <button onClick={()=>setNumber(number-1)}>Decrement</button>
            <button onClick={()=>setNumber(number+1)} >Increment</button>
        </>
    )
    

    

}

export default Message