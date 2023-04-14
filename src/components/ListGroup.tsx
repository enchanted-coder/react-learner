const ListGroup = () => {
  const fruits = ["mangoes", "apples", "oranges"];
  return (
    <>
    
      <ul className="list-group">
        <li className="list-group-item" >{fruits[0]}</li>
        <li className="list-group-item" >{fruits[1]}</li>

      </ul>
    </>  
  );
};

export default ListGroup;
