const Message = () => {

    let i = 0
    
    const TheButton = () => {
        i++
        console.log("button has been clicked " + i + " times")
        return <button onClick={TheButton}>{i}</button>
    }

    return (
        <>
            <button onClick={TheButton}>a button</button>
        </>
    )
    

    

}

export default Message