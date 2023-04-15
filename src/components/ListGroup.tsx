import { useEffect, useState } from "react";
import '../App.css'
const ListGroup = () => {
  const fruits = ["mangoes", "apples", "oranges", "grapes", "tangerines", "watermelons"];

  // implementing useState hook
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  useEffect(()=>{
    
  })

  return (
    <>
      <ul className="list-group">
        {fruits.map((fruits, index) => (
          <li onClick={()=> {setSelectedIndex(index)}} key={fruits} className={selectedIndex === index ? "list-group-item active" : "list-group-item"} >{fruits}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
